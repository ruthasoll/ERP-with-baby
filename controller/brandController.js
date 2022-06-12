const mysql = require('mysql')

const brandCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    brandCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbBrand = {

    sqlConn: sqlConn,

    getAllBrand: getAllBrand = (req, res) => {
        let sql = "SELECT * FROM brand"

        brandCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    getBrand: getBrand = (req, res) => {
        let sql = `SELECT * FROM brand WHERE id = ${req.params.id}`

        brandCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    addBrand: addBrand = (req, res) => {
        let sql = 
        `INSERT INTO brand
        (name) VALUES ("${req.body.name}")`

        brandCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    updateItem: updateItem = (req, res) => {
        let sql = 
        `UPDATE brand SET name = "${req.body.name}" WHERE id = "${req.params.id}"`

        brandCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    deleteItem: deleteItem = (req, res) => {
        let sql = `DELETE FROM brand WHERE id = "${req.params.id}"`

        brandCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
}


module.exports = {
    dbBrand,
}