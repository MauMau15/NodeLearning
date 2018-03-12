
var Clock = (function(){								//definimos el prototype para sea autoejecutable var clock = (function(){})();

	var EventEmitter = require('events').EventEmitter, 	//definimos el eventEmitter*/
		herencia = require('util').inherits			   	//definimos util para utilizar herencia*/

	var Clock = function(){								//constructor de nuestro prototipo*/
		var self = this 								//self señala al mismo prototypo
		setInterval(function(){							//definimos intervalo(callback, 1000ms)
			self.emit('tictac')							//elcallback es para que emita el evento tictac 
		}, 1000)										//hasta este momento clock no es un emiter
														//por lo tanto, self.emit() provocará error
	}

	herencia(Clock, EventEmitter)						//heredamos a clock las caract. de eventEmitter
														//Ahora self.emit() va poder emitir el evento tictac


	Clock.prototype.theTime = function(){
		var date = new Date(),
			hrs = addZero(date.getHours()),
			min = addZero(date.getMinutes()),
			sec = addZero(date.getSeconds()),
			msg = hrs + ":" + min + ":" + sec

			function addZero(num){
				return (num < 9) ? ('0' + num) : num
			}

			console.log(msg)

	}

	cucu = new Clock()

	cucu.on('tictac',function(){
		cucu.theTime()
	})

	return Clock
})()

module.exports = Clock



