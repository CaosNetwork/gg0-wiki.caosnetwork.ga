
charName = document.getElementById("char_name");
charBio = document.getElementById("bio_text");
charStory = document.getElementById("story_text");
charAbility = document.getElementById("ability_text");

charBioImg = document.getElementById("bio_img");
charStoryImg = document.getElementById("story_img");
charAbilityImg = document.getElementById("ability_img");

baseUrl = "http://127.0.0.1:5500/content/character/";
urlParam = new URLSearchParams(location.search);
for (var [key, value] of urlParam) {
	if (key == "c") {
		charUrl = baseUrl + value + "/";
	}
}

const getJSON = async url => {
	const response = await fetch(url);
	if (!response.ok) {
		window.location.href = baseUrl + "characters.html?e=404";
	}
	const data = response.json();
	return data;
}

charData = {};
// TODO: Create a Tool to make these pages.
getJSON(charUrl + "data.json").then(data => {
	charData = data;
	charName.innerHTML =
		charData.first_name + " " +
		charData.other_names.toString().replaceAll(",", " ") + " " +
		charData.last_name
	
	if (charData.auto_bio) {
		charBio.innerHTML = "TODO: Add Auto Bio.";
	} else {
		charBio.innerHTML = charData.bio.replaceAll("\n", "<br>");
	}
	charBioImg.src = charUrl + "bio.png";
	charStoryImg.src = charUrl + "story.png";
	charStory.innerHTML = charData.story.replaceAll("\n", "<br>");
	charAbility.innerHTML = charData.ability.replaceAll("\n", "<br>");
	charAbilityImg.src = charUrl + "ability.png";
});
// charData = {
// 	"first_name": "Empty",
// 	"other_names": [],
// 	"last_name": "Character",
// 	"age": 69,
// 	"height": 153,
// 	"bwh": [
// 		420,
// 		69,
// 		137
// 	],
// 	"personality": "Tsundere",
// 	"auto_bio": false,
// 	"bio": "SOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja\nSOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja\nSOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja\nSOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja",
// 	"story": "SOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja\nSOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja\nSOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja\nSOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja",
// 	"ability": "SOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja\nSOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja\nSOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja\nSOME VERRY LONE TEXT adsfhdjda dhfecuifnhui vausdbgzas dbijanasond asdiuabsdu ansdoinasiod abusdbiuabsdi\nbasidbuas bauisbduiasbid mpvdsfopa bsazudazu auisbdiab nsaoieioh basidbzas cbuiabsdiuba absdbazsd asicbi\nbauisdiua azusvdzuvauszd mmkdamslkmd uasghkgr sofpjdsofz ZAXB I nashduaf kaa aubsuad uabsd j ihuhasdja",
// }

