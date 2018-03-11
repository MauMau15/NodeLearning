/*Single thread*/

function singleThread(){
	/*Para hacer algo en el hilo de node, necesitamos
	  hacer uso del metodo Process*/
	  console.log(process.title)
	  console.log(process.execPath)
	  console.log(process.cwd)
	  
}

singleThread()