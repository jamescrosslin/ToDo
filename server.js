console.log('hellooooooooo!')

const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 3000
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'todo'

MongoClient.connect(dbConnectionStr, {
    useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.use(express.json())    

app.get('/', (request, response) => {
    db.collection('tasks').find().toArray()
    .then(data => {
        response.render('index.ejs', { info: data})
    })
    .catch(error => console.error(error))
})

app.post('/addTask', (request, response) => {
    db.collection('tasks').insertOne({taskName: request.body.task})
    .then(result => {
        console.log('Task Added To List')
        response.redirect('/')
    })
    .catch(error => console.error(error))
})

/* what I am starting to try based on the Zellwk tutorial:

app.delete('/addTask', (request, response)) => {

}
*/

// based on Leon's code, not working yet:

app.delete('/deleteTask', (request, response) => {
    db.collection('task').deleteOne({taskName: request.body.taskS})
    .then(result => {
        console.log('Task Deleted')
        response.json('Task Deleted')
    })
    .catch(error => console.error(error))
})


app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})