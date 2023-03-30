const express = require('express');
//const bodyParser = require('body-parser');
const mysql=require('mysql');
// create express app
const app = express();
// Setup server port
const port = 5000;
const conn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'mydb',
    port    :   3306
  });
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });
// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
//app.use(bodyParser.json())
// define a root route

app.get('/learner', (req, res) => {
    var sql= "SELECT * FROM learner";
    let query= conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
      });
  });
  app.get('/learner/:id', (req, res) => {
    var sql= "SELECT * FROM learner where id="+req.params.id+"";
    let query= conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
      });
  });
  app.post('/learner/:id', (req, res) => {
    var sql= "update learner set learner_name='Gareth' where id="+req.params.id+"";
    let query= conn.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results);
      });
  });
// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

 


