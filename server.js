// console.log('welcome!');
//Import all node module
var express = require('express');
var http = require('http');
var mysql = require('mysql');
var app = express();
var bodyParser = require('body-parser');

//Parse all form data
app.use(bodyParser.urlencoded({extended:true}));

//used for formatting dates
// var dayFormat = require('dateformat');
// var now = new Date();

// set the view engine to ejs
app.set('view engine','ejs');

//Import all realated JS & CSS files to webb-app
// app.use(express.static(__dirname + '/node_modules'));
//
// app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/js'));
// app.use('/js',express.static(__dirname + '/node_modules/tether/dist/js'));
// app.use('/js',express.static(__dirname + '/node_modules/jquery/dist'));
// app.use('/js',express.static(__dirname + '/node_modules/bootstrap/dist/css'));

//creating conncetion with Database
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port : '8889',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    database:'data_hantering'
});
 //
 // con.connect();
 con.connect(function(err) {
   if (err) throw err;
   console.log("Connected!");
 });


//Gloabal site title & base url
// const siteTitle = "Labb-2 (Datahanterning)";
// const baseURL = "http://localhost:3000/"

// app.get('/',function(req,res){
//     con.query("SELECT * FROM e_events ORDER BY e_start_date DESC",function(req,res){
//         res.render('pages/index',{
//             siteTitle: siteTitle,
//             pageTitle: 'Event list',
//             items: result
//         });
//     });
// });
app.get('/',function(req,res){
    con.query('SELECT * FROM users WHERE 1',function(err,result){
        console.log(result);
    });
});

//Conect to the app
var server = app.listen(3000,function(){
    console.log('server Started on 3000 ...');
});
