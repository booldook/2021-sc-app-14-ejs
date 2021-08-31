/*************** global init **************/
const port = 3000
const express = require('express')
const app = express()


/************** view engine ***************/
app.set('view engine', 'ejs')
app.set('views', './views')


/*************** middleware ***************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*************** router init **************/
app.use('/', express.static('./public'))
app.get('/', (req, res, next) => {})


/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })