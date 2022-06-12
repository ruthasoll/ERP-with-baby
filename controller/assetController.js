const mysql = require('mysql')

const assetCon = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    assetCon.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbAsset = {

    sqlConn: sqlConn,

    getAllAsset: getAllAsset = (req, res) => {
        let sql = `SELECT * FROM asset`

        assetCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },

    getAsset: getAsset = (req, res) => {
        let sql = `SELECT * FROM asset WHERE id = "${req.params.id}"`

        assetCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
    
    addAsset: addAsset = (req, res) => {
        let sql = 
        `INSERT INTO asset
        (name,
        value,
        created_at,
        asset_type,
        depreciation_cost) VALUES
        ("${req.body.name}",
        "${req.body.value}",
        "${req.body.created_at}",
        "${req.body.asset_type}",
        "${req.body.depreciation_cost}")`

        assetCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
    
    updateItem: updateItem = (req, res) => {
        let sql = 
        `UPDATE asset SET
        name = "${req.body.name}",
        value = "${req.body.value}",
        created_at = "${req.body.created_at}",
        asset_type = "${req.body.asset_type }",
        depreciation_cost = "${req.body.depreciation_cost}"
        WHERE id = "${req.params.id}"`

        assetCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
    
    deleteItem: deleteItem = (req, res) => {
        let sql = `DELETE FROM asset WHERE id = "${req.params.id}"`

        assetCon.query(sql, (sqlErr, results) => {
            if(sqlErr) console.log(sqlErr.message)

            res.send(results)
        })
    },
    

}


module.exports = {
    dbAsset,
}