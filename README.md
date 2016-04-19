#INFOR2016 presentation official site!#

INFOR x ZSISC
Runging on [zsisc.infor.org](zsisc.infor.org)

## Running ##
Make sure you have [Node.js](http://nodejs.org/) and the [MongoDB](https://www.mongodb.org/) installed.
```
$ git clone https://github.com/s094392/infor2016.git
$ cd infor2016
$ npm install
$ node app.js
```
The MongoDB connection:
```
//app.js: line 34
//app.js: line 49
mongo.connect('mongodb://localhost:27017/28final',function(err,db)
```

##Note##
The page to view the responses is `localhost/back`, which require  password to access.
Setting up the password in:
```
//app.js line 48
if(pw==="password")
```

###Packages used:###
[HTML5UP](http://html5up.net/)
[sweetalert](http://t4t5.github.io/sweetalert/)
[jParticle](http://www.htmleaf.com/jQuery/Layout-Interface/201506182060.html)

