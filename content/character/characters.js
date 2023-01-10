errorCode = 0;
urlCharParam = "";

urlParams = new URLSearchParams(location.search);
for ([key, value] of urlParams) {
	if (key == "e") {
		errorCode = value;
	}
	if (key == "c") {
		urlCharParam = value;
	}
}

infoBox = document.getElementById("info_box");
infoBoxText = document.getElementById("info_box_text");

if (errorCode == 404) {
	infoBoxText.innerHTML = "Could not load Character '" + urlCharParam + "'";
	infoBox.style.display = "revert";
	infoBox.classList.add("error_box");
}