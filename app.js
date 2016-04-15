var mongodb=require('mongodb');
var mongo=mongodb.MongoClient;
var express=require('express');
var app=express();
var server=require('http').Server(app);
var io=require('socket.io')(server);


app.use('/assets',express.static(__dirname+'/assets'));
app.use('/images',express.static(__dirname+'/images'));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/pages/index.html',function(){res.end();})
})
app.get('/about',function(req,res){
	res.sendFile(__dirname+'/pages/about.html',function(){res.end();})
})
app.get('/registration',function(req,res){
	res.sendFile(__dirname+'/pages/registration.html',function(){res.end();})
})
app.get('/projects',function(req,res){
	res.sendFile(__dirname+'/pages/projects.html',function(){res.end();})
})
app.get('/good',function(req,res){
	res.sendFile(__dirname+'/pages/good.html',function(){res.end();})
})



io.sockets.on('connection',function(socket){
	socket.on('sendReg',function(name,room,join,person,ps){
		mongo.connect('mongodb://localhost:27017/28final',function(err,db){
			if(err){
				throw err;
			}
            if(join=="there's a bug"){
                console.log(join);
            }
			db.collection('reg').insert({name:name,room:room,join:join,person:person,ps:ps});
            socket.emit('done');
		})
	})
})

//server.listen(5000);
server.listen(80);


/*
todo: person array



*/

