/*
Un stream en un chorro de información que es transmitida
por pedazos
	stream de lectura, escrituta y duplex (esc y lec)
*/

'use strict'

var fs = require('fs'),
	readStream = fs.createReadStream('assets/names.txt'),
	writeStream = fs.createWriteStream('assets/name_copy.txt')

	readStream.pipe(writeStream)

	readStream.on('data',function(chunk){
		console.log(
			'He leido: ',
			chunk.length,
			' caracteres'
		)
	})

	readStream.on('end',function(){
		console.log('Terminé de leer el archivo')
	})