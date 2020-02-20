
document.getElementById("idsecondndtask").addEventListener("click",function(event){
	if(event.target.id == "first" || event.target.id == "second" || event.target.id == "thirsd"|| event.target.id == "forsth"|| event.target.id == "fiths"|| event.target.id == "sixth"|| event.target.id == "seventh"|| event.target.id == "eights"|| event.target.id == "nines"|| event.target.id == "ozero"){
		document.getElementById("zerorow").innerText += event.target.innerText;
		document.getElementById("c").addEventListener("click",function(){
			document.getElementById("zerorow").innerText = "";
		});
		
	}
},true);

document.getElementById("s").addEventListener("click",function(){
			document.getElementById("emptyfield").innerText += document.getElementById("zerorow").innerText+"\n";
			event.stopPropagation()
		},false);

window.addEventListener('DOMContentLoaded', function() {
  let secondtask = document.getElementById('idsecondndtask');
  secondtask.addEventListener('focus', function(event) {
    document.getElementById("focus").innerText = event.target.innerText;
  }, true);
}, false);
