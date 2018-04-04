var buttons = document.getElementsByClassName("button");
var buttonsLength = buttons.length;
for (var i = 0; i < buttonsLength; i++) {
	var text = buttons[i].innerText;
	alert(text);
}