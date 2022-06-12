const User = require("../controller/employeController");
const express = require('express')
const router = express.Router()



router.get("/allEmployee", User.dbHR.getAllEmployees);
router.get("/:ep_email", User.dbHR.getEmployeeProfile);
router.get("/getDepartments", User.dbHR.getDepartments);
router.get("/getGrades", User.dbHR.getGrades);
router.get("/getExtras", User.dbHR.getExtras);
router.get("/getExtras:ep_email", User.dbHR.getExtraForemp);

router.post("/addEmployee", User.dbHR.addEmployee);
router.post("/addDepartment", User.dbHR.addDepartment);
router.post("/addGrade", User.dbHR.addGrade);
router.post("/addOrganisation", User.dbHR.addOrganisation);
router.post("/addIsgiven", User.dbHR.addIsgiven);
router.post("/addExtras", User.dbHR.addExtras);
router.post("/addIsgiven", User.dbHR.addIsgiven);

router.put("/updateEmployeeData", User.dbHR.updateEmployeedata);

router.delete("/delete", User.dbHR.deleteEmployee);

module.exports = router;