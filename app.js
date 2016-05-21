'use strict';

var mongodb=require('mongodb');
var mongo=mongodb.MongoClient;
var express=require('express');
var app=express();
var server=require('http').Server(app);
var io=require('socket.io')(server);

var config = require('./config.json');
var mongohost = config.mongohost || 'localhost';
var passwd = config.passwd || 'jizz7122';

console.log('mongohost: '+mongohost);
console.log('passwd: '+passwd);

app.use('/assets',express.static(__dirname+'/assets'));
app.use('/images',express.static(__dirname+'/images'));
app.use('/materialize',express.static(__dirname+'/materialize'));

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
	socket.on('sendReg',function(name,roomm,roomf,join,person,ps,night,locate){
		mongo.connect('mongodb://'+ mongohost +'/28final',function(err,db){
			if(err){
				throw err;
			}
            var roommn=parseInt(roomm);
            var roomfn=parseInt(roomf);
            if(join=="there's a bug"||roommn==null||roomfn==null){
                socket.emit('regfailed');
            }
            else{
                var obj = {name:name,room:(roomm+'/'+roomf),join:join,person:person,ps:ps,night:night,locate:locate};
                for(var ele in obj){
                    console.log(ele);
                    if(ele=="person"){
                        for(var i=0;i<obj[ele].length;i++){
                            obj[ele][i]=obj[ele][i].replace(/&/g,"&amp;");
                            obj[ele][i]=obj[ele][i].replace(/</g,"&lt;");
                            obj[ele][i]=obj[ele][i].replace(/>/g,"&gt;");
                        }
                    }
                    else{
                        if(ele!="night"){
                            obj[ele]=obj[ele].replace(/&/g,"&amp;");
                            obj[ele]=obj[ele].replace(/</g,"&lt;");
                            obj[ele]=obj[ele].replace(/>/g,"&gt;");
                        }
                    }
                }
    			db.collection('reg').insert(obj);
                socket.emit('done');
            }
		})
	})
    socket.on('bkreq',function(pw){
        if(pw===passwd){
            mongo.connect('mongodb://'+ mongohost +':27017/28final',function(err,db){
                if(err){
                    throw err;
                }
                db.collection('reg').find({},{_id:0},function(err,res){
                    res.toArray(function(err,res){
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

server.listen(8080);
