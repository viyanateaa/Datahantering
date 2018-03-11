//app.js
var express = require('express');
var app = express();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  port:'8889',
});

//Routing
app.get('/',function(req,res){
    res.send('Hello!!!');
    //response.end();
});
// app.get('/hello', function(req, res){
//    res.send("Hello World!");
// });
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(3000,function(){
    console.log('Listening on port 3000');
});
