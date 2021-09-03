/*************** global init **************/
const port = 3000
const express = require('express')
const app = express()

const mw2 = require('./middlewares/mw2')
const mw3 = require('./middlewares/mw3')
const mw2_1 = require('./middlewares/mw2_1')
const mw3_1 = require('./middlewares/mw3_1')


/*************** middleware **************/
/**
* ! app.use()	// get, post, put, delete 모두 받음
* ! app.get()	// get만...
* ! app.post()
* ! app.put()
* ! app.delete()
* ! middleware vs router
* ! middleware => app.use((req, res, next) => {  })
* ! router => app.use('주소부', (req, res, next) => {  })
*/

// 1 ~ 3: 모든요청에 대한 미들웨어
// 1번 방식 - 직접 CB등록
app.use((req, res, next) => {
	req.mw1 = 'MW1'
	next()
})

// 2번 방식 - 함수선언
app.use(mw2)

// 3번 방식 - 클로져 패턴
app.use(mw3('booldook'))


app.get('/', (req, res, next) => {
	// const { headers, baseUrl, hostname, ip, originalUrl, path, subdomains } = req
	const { headers, mw1, mw2, mw3, mw4, mw5 } = req
	res.json({ headers, mw1, mw2, mw3, mw4, mw5 })
})



// 4, 5, 2_1, 3_1: 특정 라우터에서만 미들웨어 사용
// 4번 방식
app.get('/test', (req, res, next) => {
	req.mw4 = '---MW4'
	next()
}, (req, res, next) => {
	req.mw5 = '---MW5'
	next()
}, (req, res, next) => {
	// const { headers, baseUrl, hostname, ip, originalUrl, path, subdomains } = req
	const { headers, mw1, mw2, mw3, mw4, mw5, mw2_1, mw3_1 } = req
	res.json({ headers, mw1, mw2, mw3, mw4, mw5, mw2_1, mw3_1 })
})

// 5번 방식
app.get('/test', mw2_1, mw3_1('HONG'), (req, res, next) => {
	// const { headers, baseUrl, hostname, ip, originalUrl, path, subdomains } = req
	const { headers, mw1, mw2, mw3, mw4, mw5, mw2_1, mw3_1 } = req
	res.json({ headers, mw1, mw2, mw3, mw4, mw5, mw2_1, mw3_1 })
})

// 6번 방식 - 내부에서 미들웨어 실행
app.get('/test2', (req, res, next) => {
	mw3_1('HONG')(req, res, next)
})





/*************** server init **************/
app.listen(port, () => { console.log('http://127.0.0.1:'+port) })