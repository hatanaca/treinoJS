console.log(teste1);
var teste1 = 0;
console.log(teste1);

var skill = "Javascript";

function exemplo() {
	//hosting skill before console.log...
	console.log(skill);///undefined
	var skill = "Java";
	console.log(skill);///Java
}
exemplo();
