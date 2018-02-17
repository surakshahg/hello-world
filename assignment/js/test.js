var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var logger = require('morgan');
var fs = require('fs');
var app     = express();
var pool = mysql.createPool({
    connectionLimit: 100,
//    host     : 'localhost',
    host   : 'localhost',
    user     : 'root',
    password : 'test@1234567',
    database : 'airticle',
    debug    :  false,    
    //database:"airticle"
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.engine('html', require('ejs').__express);
app.set('view engine', 'html');
  
app.use(express.static(__dirname+"/views"));
app.use(bodyParser.urlencoded({ extended: true })); 

function handle_database(req, res, sql_query) {
    
    pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

      connection.query(sql_query,function(err,rows){
      connection.end();
            if(!err) {
                res.json(rows);
                //console.log(JSON.stringify(rows))
            }else{
        console.log(JSON.stringify(err))
        res.json(err);
      }
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}
function insert_database(req, res, sql_query, data) {
    
    pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
        }   

        console.log('connected as id ' + connection.threadId);
        
        connection.query(sql_query, [data], function(err, rows) {
            connection.end();
            if(!err) {
                res.json(rows);
            }           
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
  });
}
app.post("/try",  function(req,res){
  
    var details = req.body;
    console.log(detailslogge);
  // var sql_query = "select * from moviemeasure.portal_users where username='"+details.username+"' and password='"+details.password+"'";
  // handle_database(req, res, sql_query);
});

app.listen(8080);
console.log('Server running at http:localhost:8080/');

