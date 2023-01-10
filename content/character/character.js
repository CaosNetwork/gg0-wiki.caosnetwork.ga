const getJSON = async url => {
	const response = await fetch(url);
	if (!response.ok) {
		window.location.href = baseUrl + "characters.html?e=404&c=" + urlCharParam;
	}
	const data = response.json();
	return data;
}
console.debug("listing objects");
charName = document.getElementById("char_name");
charBio = document.getElementById("bio_text");
charStory = document.getElementById("story_text");
charAbility = document.getElementById("ability_text");

charBioImg = document.getElementById("bio_img");
charStoryImg = document.getElementById("story_img");
charAbilityImg = document.getElementById("ability_img");

console.log("generating url");
charUrl = "";
urlCharParam = "";

baseUrl = "http://127.0.0.1:5500/content/character/";
// baseUrl = "https://gg0-wiki.caosnetwork.ga/content/character/";
urlParam = new URLSearchParams(location.search);
for (var [key, value] of urlParam) {
	if (key == "c") {
		urlCharParam = value;
		charUrl = baseUrl + value + "/";
	}
}

console.log("load json");
// TODO: Create a Tool to make these pages.
charData = {};
getJSON(charUrl + "data.json").then(data => {
	charData = data;

	charName.innerHTML =
		charData.first_name + " " +
		charData.other_names.toString().replaceAll(",", " ") + " " +
		charData.last_name

	console.log("loading images and alternative textes");
	charBioImg.src = charUrl + "bio.png";
	charBioImg.alt = "bio.png"
	charStoryImg.src = charUrl + "story.png";
	charStoryImg.alt = "story.png"
	charAbilityImg.src = charUrl + "ability.png";
	charAbilityImg.alt = "ability.png"

	console.log("loading text data")
	charBio.innerHTML = charData.bio.replaceAll("\n", "<br>");
	charStory.innerHTML = charData.story.replaceAll("\n", "<br>");
	charAbility.innerHTML = charData.ability.replaceAll("\n", "<br>");

	if (charData.auto_bio) {
		charBio.innerHTML = "TODO: Add Auto Bio.";
	}
});
