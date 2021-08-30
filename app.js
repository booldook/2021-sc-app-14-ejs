/*************** global init **************/
const express = require('express')
const app = express()
const port = 3000

/************** view engine ***************/
app.set('view engine', 'ejs')
app.set('views', './views')


/*************** middleware ***************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*************** router init **************/
app.use('/', express.static('./public'))
app.get('/coffee', (req, res, next) => {
	const menus = [
		{ name: '아메리카노', price: 2500 },
		{ name: '카페라떼', price: 3500 },
		{ name: '바닐라라떼', price: 3800 },
		{ name: '카라멜 마끼아또', price: 4500 },
	]
	// res.status(200).render(view파일, {})
	res.status(200).render('menu', { menus })
})


/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })