const express = require('express')
const app=express()

const dbCreator = require('./model/createDatabase')

const hrRoute=require('./routes/employee')
const inventoryRoute = require('./routes/inventoryRoutes')
const brandRoute = require('./routes/brandRoutes')
const warrantyRoute = require('./routes/warrantyRoutes')
const salesRoute = require('./routes/salesRoutes')
const liabilityRoute = require('./routes/liabilityRoutes')
const adminRoute = require('./routes/adminRoutes')
const categoryRoute = require('./routes/categoryRoutes')
const incomeRoute = require('./routes/incomeRoutes')
const expenseRoute = require('./routes/expenseRoutes')
const assetRoute = require('./routes/assetRoutes')
const damagedGoodRoute = require('./routes/damagedGoodRoutes')
const payrollRoute = require('./routes/payrollRoutes')
const authenticateRoute = require('./routes/authenticateRoutes')

dbCreator.createDatabase()

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
    });
    
app.use(express.json())

app.use('/erpdatabase/hr', hrRoute)
app.use('/erpdatabase/inventory', inventoryRoute)
app.use('/erpdatabase/brand', brandRoute)
app.use('/erpdatabase/warranty', warrantyRoute)

app.use('/erpdatabase/sales', salesRoute)
app.use('/erpdatabase/liability', liabilityRoute)
app.use('/erpdatabase/admin/', adminRoute)

app.use('/erpdatabase/category', categoryRoute)
app.use('/erpdatabase/income', incomeRoute)
app.use('/erpdatabase/expense', expenseRoute)

app.use('/erpdatabase/asset', assetRoute)
app.use('/erpdatabase/damagedgood', damagedGoodRoute)
app.use('/erpdatabase/payroll', payrollRoute)

app.use('/erpdatabase/authenticate', authenticateRoute)


app.listen('3000', () => {
    console.log('server started at 3000')
})