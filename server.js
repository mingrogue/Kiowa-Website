var express = require('express');
var app = express()
  , session           =     require('express-session')
  , bodyParser        =     require('body-parser')
  , config            =     require('./configs/config')
  
var cors = require('cors');
var mongoose = require("mongoose");


var admin = require('./routes/admin');
var student = require('./routes/student');
var teacher = require('./routes/teacher');
var event = require('./routes/event');
var course = require('./routes/course');
var role = require('./routes/role');
var system = require('./routes/system');


var http = require('http').Server(app);

var port = process.env.PORT || 3000;

//swagger
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ resave: true, secret: '123456' , saveUninitialized: true}));
app.use(express.static(__dirname + '/'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,token");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  next();
});


app.use('/admin', admin);
app.use('/student', student);
app.use('/teacher', teacher);
app.use('/event', event);
app.use('/course', course);
app.use('/role', role);
app.use('/system', system)

mongoose.Promise = global.Promise;
mongoose.connect(config.mongourl, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// app.get('/account', ensureAuthenticated, function(req, res){
//   res.render('account', { user: req.user });
// });

// function ensureAuthenticated(req, res, next) {
//   if (req.isAuthenticated()) { return next(); }
//   res.redirect('/login')
// }

// app.get('/logout', function(req, res){
//   req.logout();
//   res.redirect('/');
// });

http.listen(port, () => {
  console.log("HTTP Server listening on port " + port);
});

app.get('/fetch',function(req,res){  
  res.sendFile(__dirname + "/uploads/photo.jpg");  
});
