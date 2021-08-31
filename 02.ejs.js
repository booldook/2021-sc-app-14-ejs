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
app.get('/about', (req, res, next) => {
	const title = 'About Me'
	const file = 'about'
	const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus asperiores, ratione sed quam aliquid suscipit doloremque, voluptatum reprehenderit, pariatur id officiis! Quam dolore consectetur voluptatibus laudantium nisi repudiandae, quasi quas.'
	res.render('site/about', { title, file, content })
})

app.get('/pf', (req, res, next) => {
	const title = 'Portfolio'
	const file = 'pf'
	const lists = [
		{ title: 'PF_01', src: 'f1.jpg' },
		{ title: 'PF_02', src: 'f2.jpg' },
		{ title: 'PF_03', src: 'f3.jpg' },
	]
	res.render('site/pf', { title, file, lists })
})

app.get('/team', (req, res, next) => {
	const title = 'Team Infomation'
	const subTitle = '팀원을 소개합니다.'
	const file = 'team'
	const lists = [
		{ title: 'CEO', src: 'team1.jpg' },
		{ title: 'CTO', src: 'team2.jpg' },
		{ title: 'Engineer', src: 'team3.jpg' },
		{ title: 'Designer', src: 'team4.jpg' },
	]
	res.render('site/team', { title, subTitle, file, lists })
})


/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })