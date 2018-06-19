var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var indexRouter = require('./routes/index');
var familyRouter = require('./routes/family');

app.use('/', indexRouter);
app.use('/family', familyRouter);
app.use('/contact', indexRouter);
app.use('/contactPost', indexRouter);
app.use('/home', indexRouter);

// app.post('/contactPost', urlencodedParser, function (req, res) {
//   // Prepare output in JSON format
//   response = {
//      name:req.body.Name,
//      email:req.body.Email
//   };
//   console.log(response);
//   res.end(JSON.stringify(response));
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
