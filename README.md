# INFOR2016 presentation official site! #

INFOR x ZSISC
Runging on [zsisc.infor.org](https://zsisc.infor.org/2016/)

## Running ##
Make sure you have [Node.js](http://nodejs.org/) and the [MongoDB](https://www.mongodb.org/) installed.
```sh
$ git clone https://github.com/s094392/infor2016.git
$ cd infor2016
$ echo '{"passwd": "YOUR CONSOLE PASSWORD"}' > config.json
$ npm install
$ node app.js
```

## Configuration ##
Please add a ```config.json``` file in the application directory.
```
{
	"passwd": "YOUR CONSOLE PASSWORD",
	"mongohost": "YOUR MONGO HOST IP"

}
```

## Docker Support ##
* You can run the node application in a [docker](http://www.docker.com/) container with the ```Dockerfile```.
* ```docker-compose.yml``` can build a fully enviroment include [mongoDB](https://www.mongodb.org/).
* Net ports aren't expose to host by default. You can assign it while needed.


### Packages Used ###
*	[HTML5UP](http://html5up.net/)
*	[sweetalert](http://t4t5.github.io/sweetalert/)
*	[jParticle](http://www.htmleaf.com/jQuery/Layout-Interface/201506182060.html)
