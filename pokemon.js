var pokemon1 = new Object()

pokemon1['name'] = 'pikachu'
pokemon1['velocidad'] = 10

for(var pro in pokemon1){
	console.log(pro + ': ' + pokemon1[pro])
}