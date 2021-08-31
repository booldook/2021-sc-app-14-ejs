const express = require('express')
const router = express.Router()

router.get('/login', (req, res, next) => {
	res.send('로그인')
})

router.get('/logout', (req, res, next) => {
	res.send('로그아웃')
})

router.get('/join', (req, res, next) => {
	res.send('회원가입')
})

module.exports = router