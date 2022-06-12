const mysql = require('mysql')

const incomeCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    incomeCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbIncome = {

    sqlConn: sqlConn,

    getAllIncome: getAllIncome = (req, res) => {
        let sql = `SELECT * FROM income`

        incomeCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    getIncome: getIncome = (req, res) => {
        let sql = `SELECT * FROM income WHERE id = "${req.params.id}"`

        incomeCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    addIncome: addIncome = (req, res) => {
        let sql = 
        `INSERT INTO income
        (type,
        quantity,
        created_at,
        registered_by) VALUES
        ("${req.body.type}",
        "${req.body.quantity}",
        "${req.body.created_at}",
        "${req.body.registered_by}")`

        incomeCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },


    updateItem: updateItem = (req, res) => {
        let sql = 
        `UPDATE income SET 
        type = "${req.body.type}",
        quantity = "${req.body.quantity}",
        created_at = "${req.body.created_at}",
        registered_by = "${req.body.registered_by}"
        WHERE id = "${req.params.id}"`

        incomeCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },


    deleteItem: deleteItem = (req, res) => {
        let sql = `DELETE FROM income WHERE id = "${req.params.id}"`

        incomeCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
}


module.exports = {
    dbIncome,
}