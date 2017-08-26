getInputs();
function getInputs(){
	const obj = {person:{name:{first: 'FirstName', middleInitial: 'I',lastName: 'LastName'}}};
	const path = 'person.name.lastName';
	if (obj && path)
		deepCopy(obj,path);
	else
		console.log("provide object and path details in the same order");
}

function deepCopy(obj,path){
	try{
		let pathElements = path.split('.');
		let final = pathElements.reduce((currentObj,element)=>currentObj[element],obj);
		console.log("The value of the destination property is:"+final);		
	}
	catch(err){
		console.log("Please provide the proper object and relevant path.Error msg:"+err);
	}
}
