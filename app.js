var mongodb=require('mongodb');
var mongo=mongodb.MongoClient;
var express=require('express');
var app=express();
var server=require('http').Server(app);
var io=require('socket.io')(server);


app.set('port', (process.env.PORT || 5000));

app.use('/assets',express.static(__dirname+'/assets'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/pages/index.html',function(){res.end();})
})
app.get('/about',function(req,res){
	res.sendFile(__dirname+'/pages/about.html',function(){res.end();})
})
app.get('/registration',function(req,res){
	res.sendFile(__dirname+'/pages/registration.html',function(){res.end();})
})

/*
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
})*/

//server.listen(5000);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

/*
todo: person array



*/

