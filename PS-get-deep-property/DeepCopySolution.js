//Hard code object and path in the variables below
const obj = {person:{name:{first: 'FirstName', middleInitial: 'I',lastName: 'LastName'}}};
const path = 'person.name.lastName';

deepCopy(obj,path);

function deepCopy(obj,path){
	try{
		if (obj && path)
		{
			let pathElements = path.split('.');
			let final = pathElements.reduce((currentObj,element)=>currentObj[element],obj);
			console.log("The value of the destination property is:"+final);
		}	
		else
			console.log("provide object and path details in the same order");	
	}
	catch(err){
		console.log("Please provide the proper object and relevant path.Error msg:"+err);
	}
}