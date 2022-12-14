var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
	var button =document.createElement("button");
	button.appendChild(document.createTextNode("Done"));
	
	li.appendChild(button);
	button.onclick=Underlineafterclick;

	var button =document.createElement("button"); 

	button.appendChild(document.createTextNode("Delete!"));

	li.appendChild(button);

	button.onclick=removelistelement;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function Underlineafterclick(event){
event.target.parentNode.classList.toggle("done");
  }

  function removelistelement(event){
  	event.target.parentNode.remove();
  }


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

