const mysql = require('mysql')

const payrollCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    payrollCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbPayroll = {

    sqlConn: sqlConn,

    getAllPayroll: getAllPayroll = (req, res) => {
        let sql = `SELECT * FROM payroll`

        payrollCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    getPayroll: getPayroll = (req, res) => {
        let sql = `SELECT * FROM payroll WHERE id = "${req.params.id}"`

        payrollCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    addPayroll: addPayroll = (req, res) => {
        let sql = 
        `INSERT INTO payroll
        (month,
        year,
        gross_pay,
        income_tax,
        ep_email,
        ad_email) VALUES
        ("${req.body.month}",
        "${req.body.year}",
        "${req.body.gross_pay}",
        "${req.body.income_tax}",
        "${req.body.ep_email}",
        "${req.body.ad_email}")`

        payrollCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    updateItem: updateItem = (req, res) => {
        let sql = 
        `UPDATE payroll SET
        month = "${req.body.month},
        year = "${req.body.year},
        gross_pay = "${req.body.gross_pay},
        income_tax = "${req.body.income_tax},
        ep_email = "${req.body.ep_email},
        ad_email = "${req.body.ad_email}
        WHERE id = "${req.params.id}"`

        payrollCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    deleteItem: deleteItem = (req, res) => {
        let sql = `DELETE FROM payroll WHERE id = "${req.params.id}"`

        payrollCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

}


module.exports = {
    dbPayroll,
}