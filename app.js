/*************** global init **************/
const express = require('express')
const app = express()
const port = 3000
const numeral = require('numeral')
const _ = require('lodash')

const coffee = [
	{ name: '아메리카노', price: 2500 },
	{ name: '카페라떼', price: 3500 },
	{ name: '바닐라라떼', price: 3800 },
	{ name: '카라멜 마끼아또', price: 4500 },
]

const food = [
	{ name: '제육덮밥', price: 6500 },
	{ name: '설렁탕', price: 7500 },
	{ name: '백반', price: 5500 },
	{ name: '돈까스', price: 7500 },
]

const desert = [
	{ name: '치즈케잌', price: 5500 },
	{ name: '딸기마카롱', price: 4500 },
	{ name: '바닐라쉐이크', price: 5500 },
]


/************** view engine ***************/
app.set('view engine', 'ejs')
app.set('views', './views')


/*************** middleware ***************/
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/*************** router init **************/
app.use('/', express.static('./public'))
app.get('/coffee', (req, res, next) => {
	/* const sendMenus = _.cloneDeep(menus).map(v => {
		v.price = numeral(v.price).format('0,0')
		return v
	}) */
	// res.status(200).render(view파일, {})
	res.status(200).render('menu', { menus, numeral })
})

app.get('/menu/coffee', (req, res, next) => {
	res.status(200).render('coffee', { coffee, numeral })
})

app.get('/menu/food', (req, res, next) => {
	res.status(200).render('food', { food, numeral })
})

app.get('/menu/desert', (req, res, next) => {
	res.status(200).render('desert', { desert, numeral })
})


/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })