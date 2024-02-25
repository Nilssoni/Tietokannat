var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
/*const db = require('./database');
const bcrypt = require('bcryptjs');
const basicAuth = require('express-basic-auth');
*/

const bookRouter = require('./routes/book');
const borrowerRouter = require('./routes/borrower');
const userRouter = require('./routes/user');
const opintojaksoRouter = require('./routes/opintojakso.js');
const opiskelijaRouter = require('./routes/opiskelija.js');
const arviointiRouter = require('./routes/arviointi.js');

var app = express();

//app.use(basicAuth({users: { 'admin': '1234' }}))
//app.use(basicAuth( { authorizer: myAuthorizer, authorizeAsync:true, } ))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);
app.use('/user', userRouter);
app.use('/opintojakso', opintojaksoRouter);
app.use('/opiskelija', opiskelijaRouter);
app.use('/arviointi', arviointiRouter);
/*
function myAuthorizer(username, password,cb){
    db.query('SELECT password FROM user WHERE username = ?',[username], 
      function(dbError, dbResults, fields) {
        if(dbError){
              response.json(dbError);
            }
        else {
          if (dbResults.length > 0) {
            bcrypt.compare(password,dbResults[0].password, 
              function(err,res) {
                if(res) {
                  console.log("succes");
                  return cb(null, true);
                }
                else {
                  console.log("wrong password");
                  return cb(null, false);
                }			
                response.end();
              }
            );
          }
          else{
            console.log("user does not exists");
            return cb(null, false);
          }
        }
      }
    );
  }
*/
module.exports = app;
