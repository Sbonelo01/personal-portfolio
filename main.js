

var span = document.getElementsByClassName('close')[0];

//get the modal
function openModal(name) {
	modal = document.getElementById(name);
	modal.style.display = "block";
	modal.style.margin = "2% 2% 2% 2%";	
	modal.style.justify = "center";																						
}

//close the modal
function closeModal(name) {
	modal = document.getElementById(name);
	modal.style.display = "none";
}

window.onclick = function(event){
	if (event.target == modal){
		modal.style.display = "none";
	}
}
