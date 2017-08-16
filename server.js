const   express = require('express'),
        bodyParser = require('body-parser'),
        usersCtrl = require('./usersCtrl')
        port = 3000,
        app = express();

//===SENDS DATA THROUGH PARSER===//
app.use(bodyParser.json());


//========= END POINTS =========//
app.get('/api/users', usersCtrl.allUsers)
app.get('/api/users/:id', usersCtrl.userId)
app.get('/api/admins', usersCtrl.getAdmins)
app.get('/api/nonadmins', usersCtrl.notAdmins)
app.get('/api/user_type/:type', usersCtrl.getByType)
app.put('/api/users/:id', usersCtrl.updateUser)
app.post('/api/users', usersCtrl.addUser)
app.delete('/api/users/:id', usersCtrl.deleteUser)


//===LISTENS ON ASSIGNED PORT===//
app.listen(port, () => console.log(`Listening on ${port}`))