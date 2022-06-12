const mysql = require('mysql')

const adminCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    adminCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbAdmin = {

    sqlConn: sqlConn,

    getAllAdmin: getAllAdmin = (req, res) => {
        let sql = `SELECT * FROM admin`

        adminCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
    
    getAdmin: getAdmin = (req, res) => {
        let sql = `SELECT * FROM admin WHERE ad_email = "${req.params.id}"`

        adminCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    addAdmin: addAdmin = (req, res) => {
        let sql = 
        `INSERT INTO admin
        (admin_id,
        username,
        ad_email,
        password) VALUES
        ("${req.body.admin_id}",
        "${req.body.username}",
        "${req.body.ad_email}",
        "${req.body.password}")`

        adminCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    updateItem: updateItem = (req, res) => {
        let sql = 
        `UPDATE admin SET
        admin_id = "${req.body.admin_id}",
        username = "${req.body.username}",
        ad_email = "${req.body.ad_email}",
        password = "${req.body.password}"
        WHERE ad_email = "${req.params.id}"`

        adminCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    deleteItem: deleteItem = (req, res) => {
        let sql = `DELETE FROM admin WHERE ad_email = "${req.params.id}"`

        adminCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

}


module.exports = {
    dbAdmin,
}