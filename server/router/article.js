const express = require('express')
const router = express.Router()
const ARTICLE = require('./../module/article.js')

router.get('/list', function (req, res, next) {
	const type = req.query.type
	const pageSize = req.query.pageSize
	const pageNumber = req.query.pageNumber
	ARTICLE.find({
		type,
		pageSize,
		pageNumber
	}, function (data) {
		console.log(data)
		res.json(data)
	})
})

router.post('/put', function (req, res, next) {
	const type = req.body.type
	const time = new Date()
	const content = req.body.content
	const title = req.body.title
})

router.get('/test', function (req, res, next) {
	const type = req.body.type
	const time = new Date().getTime()
	const content = req.body.content
	const title = req.body.title

	ARTICLE.insert({
		type,
		time,
		content,
		title,
		author: 'ganlei'
	}, function (callback) {
		res.send(callback)
	})
})




module.exports = router
