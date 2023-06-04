const mongoose = require('mongoose')
const app = require('./app')

const server = app.listen(5680, (req, res)=>{
    console.log('live running')
})
