# GuessWhatServer

GuessWhatServer is a Node/Express and MongoDB backend to support GuessWhat services.

This server currently supports facebook authentication, user management APIs.
It also includes socket.io implementation server side.

You can get started here: (http://socket.io/get-started/chat/)

Configurations
==============


ChangeLogs
==========
*** Please change your utils/utils.js 
From
exports.config  = require('../../configs/config')
To
exports.config  = require('../configs/config')


APIs Implemented:

Service: Creating User
=========================
Method: POST
URL: http://<ip>:3000/admin/register 
Data: {"email":"kalyan.kundu@gmail.com","password":"96a2c08d7185775721c9be88a39f6365","firstname":"Anil","lastname":"yadav"}

Service: Get All Users
======================
Method: GET
URL: http://<ip>:3000/admin/getall
Data: {}

"# Kiowa-Website" 
