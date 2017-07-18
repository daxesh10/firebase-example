const
    express = require('express'),
    path = require('path')

const app = express()

app.use(express.static(path.join(__dirname+'/client')))
app.use(require('./api/routes')())

app.listen(8081,()=>{

    console.log('server running on. \n localhost:8080')
})