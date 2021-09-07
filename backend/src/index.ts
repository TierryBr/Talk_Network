import express from 'express'
import routesUser from '../app/routes/user'
import routesPost from '../app/routes/post'
import routesComment from '../app/routes/comment'
import bodyParser from 'body-parser'
import db from '../app/config/database'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routesUser)
app.use(routesPost)
app.use(routesComment)

app.listen(3333)

db('mongodb://localhost/redesocial4')
