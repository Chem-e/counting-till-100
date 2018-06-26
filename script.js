function print(){
	let bodyEl=document.querySelector("body");
	for(let i=1;i<=100;i++){
	
	bodyEl.innerHTML=bodyEl.innerHTML + "<p>" + i + "</P>";
	
	}
	console.log(bodyEl.innerHTML);
}