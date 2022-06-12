const mysql = require('mysql')

const liabilityCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    liabilityCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbLiability = {

    sqlConn: sqlConn,

    getAllLiability: getAllLiability = (req, res) => {
        let sql = `SELECT * FROM liability`

        liabilityCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    getLiability: getLiability = (req, res) => {
        let sql = `SELECT * FROM liability WHERE id = "${req.params.id}"`

        liabilityCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    addLiability: addLiability = (req, res) => {
        let sql = 
        `INSERT INTO liability
        (name,
        created_at,
        type,
        amount) VALUES
        ("${req.body.name}",
        "${req.body.created_at}",
        "${req.body.type}",
        "${req.body.amount}")`

        liabilityCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    updateItem: updateItem = (req, res) => {
        let sql = 
        `UPDATE liability SET
        name = "${req.body.name}",
        created_at = "${req.body.created_at}",
        type = "${req.body.type}",
        amount = "${req.body.amount}" 
        WHERE id = "${req.params.id}"`

        liabilityCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    deleteItem: deleteItem = (req, res) => {
        let sql = `DELETE FROM liability WHERE id = "${req.params.id}"`

        liabilityCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
    
}


module.exports = {
    dbLiability,
}