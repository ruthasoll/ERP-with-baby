const mysql = require('mysql')

const damagedGoodCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    damagedGoodCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbDamagedGood = {

    sqlConn: sqlConn,

    getAllDamagedGood: getAllDamagedGood = (req, res) => {
        let sql = `SELECT * FROM damaged_good`

        damagedGoodCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
    
    getDamagedGood: getDamagedGood = (req, res) => {
        let sql = `SELECT * FROM damaged_good WHERE id = "${req.params.id}"`

        damagedGoodCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    addDamagedGood: addDamagedGood = (req, res) => {
        let sql = 
        `INSERT INTO damaged_good
        (product_id,
        quantity) VALUES
        ("${req.body.product_id}",
        "${req.body.quantity}")`

        damagedGoodCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    updateItem: updateItem = (req, res) => {
        let sql = 
        `UPDATE damaged_good SET
        product_id = "${req.body.product_id}",
        quantity = "${req.body.quantity}"
        WHERE id = "${req.params.id}"`

        damagedGoodCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    deleteItem: deleteItem = (req, res) => {
        let sql = `DELETE FROM damaged_good WHERE id = "${req.params.id}"`

        damagedGoodCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },


}


module.exports = {
    dbDamagedGood,
}