
var Clock = require('./emitter.js')
var cucu = new Clock()

cucu.on('tictac',function(){
	cucu.theTime()
})	