const express = require('express')
const path = require('path')
const port = 3000
const app = express()

app.get('/', function(req,res){
	res.sendFile(path.join(__dirname,'/index.html'))
})

app.get('/index.html', function(req,res){
	res.sendFile(path.join(__dirname,'/index.html'))
})

app.get('/quiz.html', function(req,res){
	res.sendFile(path.join(__dirname,'/quiz.html'))
})

app.get('/notes.html', function(req,res){
	res.sendFile(path.join(__dirname,'/notes.html'))
})

app.listen(port)


