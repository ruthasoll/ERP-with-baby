const mysql = require('mysql')

const authCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    authCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbAuth = {

    sqlConn: sqlConn,

    check: check = (req, res) => {
        let sql = `SELECT * FROM admin WHERE username  = BINARY "${req.body.username}" AND password = BINARY "${req.body.password}"`

        authCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            if(results.length !== 0){
                res.send(true)
            } else {
                res.send(false)
            }
        })
    }

}


module.exports = {
    dbAuth,
}