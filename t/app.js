var mongodb=require('mongodb');
var mongo=mongodb.MongoClient;
var app=require('express')();
var server=require('http').Server(app);
var io=require('socker.io')(server);

app.use('/static',express.static(__dirname+'/static'));

io.sockets.on('connection',function(socket){
	socket.on('sendReg',function(name,room,join,person,ps){
		mongo.connect('mongodb://localhost:27017/28final',function(err,db){
			if(err){
				throw err;
			}
			//person
			db.collection('reg').insert({name:name,room:room,join:join,person:person,ps:ps})
		})
	})
})

server.listen(1234);

/*
todo: person array



*/