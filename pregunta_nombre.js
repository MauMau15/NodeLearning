var stdin = process.stdin,
	stdout = process.stdout,
	person = {
		name: null,
		age: 0
	}

function saveAge(edad){
	person['age'] = edad
	if(person['age'] >= 18){
		stdout.write('Ya eres viejo\n')
	}else{
		stdout.write('Eres muy joven para node\n')
	}
	process.exit()
}

function saveName(name){
	person['name'] = name
	var question = 'Hola ' + person.name + ' ¿Cuantos años tienes?'
	quiz(question,saveAge)
}

function quiz(question, callback){
	
	stdout.write(question + ": ")
	stdin.resume()

	stdin.once('data',function(res){
		callback(res.toString().trim())
	})
}

stdin.setEncoding('utf8')
quiz('¿Como te llamas?',saveName)

