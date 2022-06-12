const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
})

function sqlConn(){
    
    db.connect(conErr => {
        if(conErr) throw conErr
    })
}

const dbHR = {
  sqlConn: sqlConn,
addEmployee: addEmployee =  (req, res) => {
  let sql = `INSERT INTO employe( e_id,
    paid_leave_taken,
    encashed_leave_this_month,
    encashed_leave_till_date,
    doj,
    name,
    dob,
    address,
    city,
    state,
    pincode,
    email,
    password,
    org_name,
    dept_id,
    grade_id)
    VALUES(,
      "${req.body. e_id}",
      "${req.body.paid_leave_taken}",
      "${req.body.encashed_leave_this_month}",
      "${req.body.encashed_leave_till_date}",
    "${req.body.doj}",
    "${req.body.name}",
    "${req.body.dob}",
    "${req.body.address}",
    "${req.body.city}",
   "${req.body.state}",
    "${req.body.pincode}",
    "${req.body.email}",
    "${req.body.org_name}",
    "${req.body.dept_id}",
    "${req.body.grade_id}",
  )`;
  db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},
deleteEmployee: deleteEmployee =  (req, res) => {
  const sql = `DELETE FROM Employe WHERE ep_email = "${req.params.ep_email_email}"`;
 db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},
getAllEmployees: getAllEmployees = (req, res) => {
  const query = `SELECT * from employe`;
  db.query(query, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},

getEmployeeProfile: getEmployeeProfile = (req, res) => {
  // console.log(req.params);
  const sql = `SELECT * FROM employe where ep_email = "${req.params.ep_email}"`
 db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},

updateEmployeedata: updateEmployeedata = (req, res) => {
  
  const updateQuery = `UPDATE employe set 
  doj= "${req.body.doj}",
  name= "${req.body.name}",
  dob= "${req.body.dob}",
  address= "${req.body.address}",
  city= "${req.body.city}",
  state= "${req.body.state}",
  pincode= "${req.body.pincode}",
  org_name= "${req.body.org_name}",
  dept_id= "${req.body.dept_id}",
  grade_id= "${req.body.grade_id}",
  where ep_email= "${req.body.ep_email}"`;
  //console.log(values);
  db.query(updateQuery, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},

addDepartment: addDepartment = async (req, res) => {
  const sql = `INSERT into department(
    dept_id,
    dept_name,
    org_name)
    VALUES( "${req.body.dept_name}", "${req.body.org_name}")`;
    db.query(sql, (sqlErr, results) => {
      if(sqlErr) console.log(sqlErr.message)

      res.send(results)
  })
},
getDepartments: getDepartments =  (req, res) => {
  const sql = `SELECT * from department`;
  db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},
addGrade: addGrade = async (req, res) => {
  const sql = `INSERT into gradepay(
    grade_id,
    grade_name,
    basic_pay,
    grade_pf,
    grade_bonus,
    grade_ta,
    grade_da)
    VALUES("${req.body.grade_name}",
      "${req.body.grade_pay}",
      "${req.body.grade_pf}",
      "${ req.body.grade_bonus}",
      "${req.body.grade_ta}",
      "${req.body.grade_da}",)`;
     db.query(sql, (sqlErr, results) => {
                if(sqlErr) console.log(sqlErr.message)
    
                res.send(results)
            })
},
getGrades: getGrades =  (req, res) => {
  const query = `Select * from gradepay`;
  db.query(query, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},
addOrganisation: addOrganisation =  (req, res) => {
  const sql = `INSERT into organisation(
    org_name,
    email,
    location,
    contact_number,
    paid_leave_limit,
    encashed_leave_limit
    ) values("${req.body.org_name}",
    "${req.body.email}",
    "${req.body.location}",
    "${req.body.contact_number}",
    "${req.body.paid_leave_limit}",
    "${req.body.encashed_leave_limit}",)`

    db.query(sql, (sqlErr, results) => {
      if(sqlErr) console.log(sqlErr.message)

      res.send(results)
  })
},
addExtras: addExtras = async (req, res) => {
  const sql = `INSERT into extras(
    ex_type,
    ex_id
    ) values(,"${req.body.ex_type}")`;
    db.query(sql, (sqlErr, results) => {
      if(sqlErr) console.log(sqlErr.message)

      res.send(results)
  })
  
},
getExtras: getExtras = async (req, res) => {
  const sql = `Select * from extras`;

  db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},
addIsgiven: addIsgiven = async (req, res) => {
  const sql = `Insert into is_given(
    ex_id,
    amount,
    email)
    values( "${req.body.ex_id}","${req.body.amount}","${req.body.email}")`
    db.query(sql, (sqlErr, results) => {
      if(sqlErr) console.log(sqlErr.message)

      res.send(results)
  })
},
getExtraForemp: getExtraForemp = async (req, res) => {
  const sql = `Select * from is_given where ep_email="${req.params.ep_email}"`;
db.query(sql, (sqlErr, results) => {
    if(sqlErr) console.log(sqlErr.message)

    res.send(results)
})
},

}
module.exports = {
 dbHR,
};
