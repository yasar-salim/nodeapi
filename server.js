var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001;

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hotel"
});

app.listen(port);

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.get('/categories',function(req,res){
    
        con.query("SELECT * FROM categories", function (err, result, fields) {
            if (err) throw err;
            res.send(fil);
        });

});

app.get('/subcategories/:id',function(req,res){
    var id=req.params.id;
    
        con.query("SELECT * FROM sub WHERE cid="+id, function (err, result, fields) {
            if (err) throw err;
            
            res.send(result);
        });

});

console.log(' RESTful API server started on: ' + port);
