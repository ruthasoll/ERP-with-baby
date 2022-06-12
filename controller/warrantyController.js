const mysql = require('mysql')

const warrantyCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    warrantyCon.connect(conErr => {
        if(conErr) throw conErr
    })
}


const dbWarranty = {
    sqlConn: sqlConn,

    getAllWarranty: getAllWarranty = (req, res) => {
        let sql = "SELECT * FROM warranty"

        warrantyCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    getWarranty: getWarranty = (req, res) => {
        let sql = `SELECT * FROM warranty WHERE id = "${req.params.id}"`

        warrantyCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    addWarranty: addWarranty = (req, res) => {
        let sql =
        `INSERT INTO warranty
        (full_name,
        phone_number,
        serial_number,
        valid_until)
        VALUES
        ("${req.body.full_name}",
        "${req.body.phone_number}",
        "${req.body.serial_number}",
        "${req.body.valid_until}")`

        warrantyCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    updateItem: updateItem = (req, res) => {
        let sql =
        `UPDATE warranty SET
        full_name = "${req.body.full_name}",
        phone_number = "${req.body.phone_number}",
        serial_number = "${req.body.serial_number}",
        valid_until = "${req.body.valid_until}"
        WHERE id = "${req.params.id}"`

        warrantyCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    deleteItem: deleteItem = (req, res) => {
        let sql = `DELETE FROM warranty WHERE id = "${req.params.id}"`

        warrantyCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
}

module.exports = {
    dbWarranty,
}
