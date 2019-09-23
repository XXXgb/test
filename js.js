// JavaScript Document
function jisuan(){
	var first=document.getElementById("first").value;
	var second=document.getElementById("second").value;
	var fuhao=document.getElementById("fuhao").value;
	var result;
	if(fuhao=="+"){
		result=parseInt(first)+parseInt(second);
	}
	if(fuhao=="-"){
		result=parseInt(first)-parseInt(second);
	}
	if(fuhao=="*"){
		result=parseInt(first)*parseInt(second);
	}
	if(fuhao=="/"){
		result=parseInt(first)/parseInt(second);
	}
	document.getElementById("result").innerHTML=result;
}