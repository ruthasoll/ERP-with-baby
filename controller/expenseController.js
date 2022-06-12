const mysql = require('mysql')

const expenseCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    expenseCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbExpense = {

    sqlConn: sqlConn,

    getAllExpense: getAllExpense = (req, res) => {
        let sql = `SELECT * FROM expense`

        expenseCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
    
    getExpense: getExpense = (req, res) => {
        let sql = `SELECT * FROM expense WHERE id = "${req.params.id}"`

        expenseCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    addExpense: addExpense = (req, res) => {
        let sql = 
        `INSERT INTO expense
        (name,
        created_at,
        ex_type,
        ex_amount) VALUES
        ("${req.body.name}",
        "${req.body.created_at}",
        "${req.body.ex_type}",
        "${req.body.ex_amount}")`

        expenseCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    updateItem: updateItem = (req, res) => {
        let sql = 
        `UPDATE expense SET
        name = "${req.body.name}",
        created_at = "${req.body.created_at}",
        ex_type = "${req.body.ex_type}",
        ex_amount = "${req.body.ex_amount}"
        WHERE id = "${req.params.id}"`

        expenseCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    deleteItem: deleteItem = (req, res) => {
        let sql = `DELETE FROM expense WHERE id = "${req.params.id}"`

        expenseCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

}


module.exports = {
    dbExpense,
}