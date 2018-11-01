var express = require('express');
var mysql = require('mysql');
var app = express();

var db = mysql.createConnection({
	host:'localhost',
	user:'root',
	passeord:'',
	port:3306,
	database : 'testNode',
});


db.connect(function(err){
	if(err) throw err;
	console.log('Database connected.')
});



app.get('/createdb',function(req,res){

	let sql = 'CREATE DATABASE testNode';

	db.query(sql,function(err,results,fields){
			if(err) throw err;

			res.send('New Database is Created.');
	});

});



app.get('/createtable',function(req,res){

	let sql = 'CREATE TABLE sample(id int primary key, name varchar(20), phone varchar(10))';


	db.query(sql,function(err){
			if(err) throw err;
			res.send('New Table is created.')
	});
});






app.get('/',function(req,res){

	res.send('Hello World, This is really awesome app and its working.');


});






app.listen('5000',function(err){
	if(err) throw err;

	console.log("Server started at port no 5000");
	console.log('You can acccess the webpage using http://localhost:5000');
});