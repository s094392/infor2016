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
/*app.get('/projects',function(req,res){
	res.sendFile(__dirname+'/pages/projects.html',function(){res.end();})
})*/
app.get('/back',function(req,res){
    res.sendFile(__dirname+'/pages/back.html',function(){res.end();})
})


io.sockets.on('connection',function(socket){
	socket.on('sendReg',function(name,room,join,person,ps,night,locate){
		mongo.connect('mongodb://localhost:27017/28final',function(err,db){
			if(err){
				throw err;
			}
            if(join=="there's a bug"){
                console.log(join);
            }
            else{
    			db.collection('reg').insert({name:name,room:room,join:join,person:person,ps:ps,night:night,locate:locate});
                socket.emit('done');
            }
		})
	})
    socket.on('bkreq',function(pw){
        if(pw==="1"){
            mongo.connect('mongodb://localhost:27017/28final',function(err,db){
                if(err){
                    throw err;
                }
                db.collection('reg').find({},{_id:0},function(err,res){
                    res.toArray(function(err,res){
                        /*res=JSON.stringify(res);
                        res=res.split("},{");
                        res[0] = res[0].slice(2);
                        res[res.length-1] = res[res.length-1].slice(0,res[res.length-1].length-2);
                        for(i=0;i<res.length;i++){console.log(res[i]);}*/
                        socket.emit('giveall',res);
                    })
                })
            })
        }
        else{
            socket.emit('loginfail');
        }
    })
})

//server.listen(5000);
server.listen(8080);


/*
todo: person array

jizz

*/

