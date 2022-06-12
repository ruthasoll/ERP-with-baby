const mysql = require('mysql')

const categoryCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    categoryCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbCategory = {

    sqlConn: sqlConn,

    getAllCategory: getAllCategory = (req, res) => {
        let sql = "SELECT * FROM category"

        categoryCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    getCategory: getCategory = (req, res) => {
        let sql = `SELECT * FROM category WHERE id = "${req.params.id}"`

        categoryCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },


    addCategory: addCategory = (req, res) => {
        let sql = `INSERT INTO category (name) VALUES ("${req.body.name}")`

        categoryCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },


    updateItem: updateItem = (req, res) => {
        let sql = `UPDATE category SET name = "${req.body.name}" WHERE id = "${req.params.id}"`

        categoryCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    deleteItem: deleteItem = (req, res) => {
        let sql = `DELETE FROM category WHERE id = "${req.params.id}"`

        categoryCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    }
}

module.exports = {
    dbCategory,
}