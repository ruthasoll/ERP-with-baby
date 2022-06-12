const mysql = require('mysql')

let db = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "",
  
  });

  const connectOnce = mysql.createConnection({

    host: "localhost",
  
    user: "root",
  
    password: "",

    database: "ERPdatabase",
  
  });


function createAdminTable(){
    let admin =
      `CREATE TABLE IF NOT EXISTS admin(admin_id varchar(255),
       username varchar(255), 
       ad_email varchar(255), 
       password varchar(255), 
       primary key(ad_email))`;
       
       connectOnce.query(admin, (err) => {
        if (err) {
          throw err;
        }
      });
}

function createOrganizationTable(){
    let org =
      `CREATE TABLE IF NOT EXISTS organisation(org_name varchar(255),
       ad_email varchar(255), 
       location varchar(255), 
       contact_number varchar(255), 
       paid_leave_limit int, encashed_leave_limit int,
        primary key(org_name)) `;
    connectOnce.query(org, (err) => {
      if (err) {
        throw err;
      }
    });
}

function createDepartmentTable(){
    let dep =
        `CREATE TABLE IF NOT EXISTS department(dept_id varchar(255),
         dept_name varchar(255), 
         org_name varchar(255), 
         primary key (dept_id), foreign key (org_name)
          references organisation(org_name) on delete set null)`;
      connectOnce.query(dep, (err) => {
        if (err) {
          throw err;
        }
      });
}

function createGradePayTable(){
    let gradepay =
        `CREATE TABLE IF NOT EXISTS gradepay(grade_id varchar(255),
         grade_name varchar(255), basic_pay int, 
         grade_pf varchar(255), grade_bonus int, 
         grade_ta varchar(255), grade_da varchar(255), 
         primary key (grade_id))`;
    
      connectOnce.query(gradepay, (err) => {
        if (err) {
          throw err;
        }
      });
}

function createEmployeTable(){
    let employe =
        `CREATE TABLE IF NOT EXISTS employe(present int,  e_id varchar(255),
          paid_leave_taken int, 
          encashed_leave_this_month int,
           encashed_leave_till_date int,
            doj date,  
            name varchar(255), dob date, 
            address varchar(255), city varchar(255),
             state varchar(255), pincode numeric(6, 0), 
             ep_email varchar(255) unique, password varchar(255),
              org_name varchar(255), dept_id varchar(255), 
              grade_id varchar(255), primary key(ep_email), 
              foreign key (org_name) references organisation(org_name)
               on delete  set null, foreign key (dept_id) references 
               department(dept_id) on delete set null, 
               foreign key (grade_id) references gradepay(grade_id) 
               on delete set null)`;
      connectOnce.query(employe, (err) => {
        if (err) {
          throw err;
        }
      });
}


function createExtrasTable(){
    let extra =
      `CREATE TABLE IF NOT EXISTS extras(ex_type varchar(255),
       ex_id varchar(255), primary key (ex_id))`;
    connectOnce.query(extra, (err) => {
      if (err) {
    
        throw err;
      }
    });
}


function createIsGivenTable(){
    let given =
        `CREATE TABLE IF NOT EXISTS is_given( ex_id varchar(255)
        , amount int, ep_email varchar(255), 
        primary key (ex_id, ep_email), foreign key(ep_email)
         references employe(ep_email) on delete cascade, 
         foreign key (ex_id) references extras(ex_id) on delete cascade)`;
      connectOnce.query(given, (err) => {
        if (err) {
          throw err;
        }
      });
}


function createPayrollTable(){
    let payrol =
    `CREATE TABLE IF NOT EXISTS payroll( transaction_id SERIAL, 
      month int, year int, gross_pay int, income_tax int, 
      ep_email varchar(255), ad_email varchar(255), primary key (transaction_id),
       foreign key(ep_email) references employe(ep_email) on delete set null, 
       foreign key(ad_email) references admin(ad_email) on delete set null)`;
    connectOnce.query(payrol, (err) => {
    if (err) {
      throw err;
    }
     });
    
}


function createBrandTable(){
    let sqlBrand = 
    `CREATE TABLE IF NOT EXISTS brand
    (id int(11) AUTO_INCREMENT,
    name varchar(50),
    PRIMARY KEY(id))
    `
          
    connectOnce.query(sqlBrand, (err) => {
        if (err) {
          throw err;
        }
      });
    
}

function createCategoryTable(){
    let sqlCategory =
    `CREATE TABLE IF NOT EXISTS category
    (id int(11) AUTO_INCREMENT,
    name varchar(50),
    PRIMARY KEY(id))
    `
    
    connectOnce.query(sqlCategory, (err) => {
      if (err) {
        throw err;
      }
    });
  

}

function createWarrantyTable(){
    let sqlWarranty =
    `CREATE TABLE IF NOT EXISTS warranty
    (id int(11) AUTO_INCREMENT,
    full_name varchar(50),
    phone_number int(11),
    serial_number varchar(20),
    valid_until datetime,
    PRIMARY KEY(id))
    `      
        
    connectOnce.query(sqlWarranty, (err) => {
      if (err) {
        throw err;
      }
    });

}

function createInventoryTable(){
    let sqlInventory =
      `CREATE TABLE IF NOT EXISTS inventory
      (id int(11) AUTO_INCREMENT,
      product_name varchar(50), 
      product_description varchar(1024), 
      product_unit varchar(10), 
      product_quantity double, 
      unit_cost double, price double, 
      least_critical_amount double, 
      high_amount double, 
      created_at datetime, 
      updated_at datetime, 
      expire_date datetime, 
      category int(11), 
      brand int(11), 
      added_by varchar(255), 
      primary key(id), 
      FOREIGN KEY (category) REFERENCES category(id) ON DELETE SET NULL, 
      FOREIGN KEY (brand) REFERENCES brand(id) ON DELETE SET NULL,
      FOREIGN KEY (added_by) REFERENCES employe(ep_email) ON DELETE SET NULL)`;
      
    
      connectOnce.query(sqlInventory, (err) => {
        if (err) {
          throw err;
        }
      }); 
}

function createSalesTable(){
    let sqlSales = 
      `CREATE TABLE IF NOT EXISTS sales
      (id int(11) AUTO_INCREMENT, 
      product_id int(11), 
      number_of_items double, 
      selling_price double, 
      warranty int(11), 
      vat double, 
      witholding_tax double, 
      created_at datetime,
      sold_by varchar(255),
      primary key(id),
      FOREIGN KEY (product_id) REFERENCES inventory(id) ON DELETE SET NULL, 
      FOREIGN KEY (warranty) REFERENCES warranty(id) ON DELETE SET NULL,
      FOREIGN KEY (sold_by) REFERENCES employe(ep_email) ON DELETE SET NULL);`;
    
    
      connectOnce.query(sqlSales, (err) => {
        if (err) {
          throw err;
        }
      });
    
    
}

function createDamagedGoodTable(){
    let sqlDamagedGood =
      `CREATE TABLE IF NOT EXISTS damaged_good
      (id int(11) AUTO_INCREMENT,
      product_id int(11),
      quantity double,
      PRIMARY KEY (id),
      FOREIGN KEY(product_id) REFERENCES inventory(id) ON DELETE SET NULL)`
          
      connectOnce.query(sqlDamagedGood, (err) => {
        if (err) {
          throw err;
        }
      });

}
function createIncomeTable(){
  let sqlincome =
    `CREATE TABLE IF NOT EXISTS income
    (id int(11) AUTO_INCREMENT,
    type varchar(255),
    quantity double,
    created_at datetime,
    registered_by varchar(255),
    PRIMARY KEY (id),
    FOREIGN KEY(registered_by) REFERENCES employe(ep_email) ON DELETE SET NULL)`
    connectOnce.query(sqlincome, (err) => {
      if (err) {
        throw err;
      }
    });

}
function createLiabilityTable(){
  let sqlLiability =
    `CREATE TABLE IF NOT EXISTS liability
    (id int(11) AUTO_INCREMENT,
    name varchar(255),
    created_at datetime,
    type varchar(255),
    amount double,
    PRIMARY KEY (id))`
    connectOnce.query(sqlLiability, (err) => {
      if (err) {
        throw err;
      }
    });
}

function createAssetTable(){
  let sqlAsset =
    `CREATE TABLE IF NOT EXISTS asset
    (id int(11) AUTO_INCREMENT,
    name varchar(255),
    value double,
    created_at datetime,
    asset_type varchar(255),
    depreciation_cost double,
    PRIMARY KEY (id))`
    connectOnce.query(sqlAsset, (err) => {
      if (err) {
        throw err;
      }
    });
}

function createExpenseTable(){
   let sqlExpense =
  `CREATE TABLE IF NOT EXISTS expense
  (id int(11) AUTO_INCREMENT,
  name varchar(255),
  created_at datetime,
  ex_type varchar(255),
  ex_amount double,
  PRIMARY KEY (id))`
  connectOnce.query( sqlExpense, (err) => {
    if (err) {
      throw err;
    }
  });

}

function createTables(){

    createAdminTable()
    createOrganizationTable()
    createDepartmentTable()

    createGradePayTable()
    createEmployeTable()
    createExtrasTable()

    createIsGivenTable()
    createPayrollTable()
    createBrandTable()

    createCategoryTable()
    createWarrantyTable()
    createInventoryTable()
    
    createSalesTable()
    createDamagedGoodTable()
    createIncomeTable()

    createLiabilityTable()
    createAssetTable()
    createExpenseTable()

    db.end(err => {if(err) throw err})
}



const createDatabase = () => {

    function createTheDatabase(){
        let sql = "CREATE DATABASE ERPdatabase";
      
        db.query(sql, (err) => {
      
          if (err) {
            throw err;
          }
          console.log("created the database")

          connectOnce.connect(err => {
            if(err) console.log(err.message)

            console.log("ConnectOnce connected")
          })
          createTables()
      
        });
    }
    
    db.connect((err) => {
    
        if (err) {
          throw err;
        }
    
        let sql = "SHOW DATABASES LIKE 'ERPdatabase';"
    
        db.query(sql, (err, result) => {
          if(err) throw err;

          if(result.length === 0){
            createTheDatabase()
          } 
          else{
            console.log("database exists")
            createTables();
          }

        })
      
        console.log("MySql Connected");
      
    });
    

}

module.exports = {
    createDatabase,
}