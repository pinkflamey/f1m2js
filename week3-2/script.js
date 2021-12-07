
const myImage = document.getElementById("myImage");
const myTitle = document.getElementById("myTitle");
const paintingInfo = document.getElementById("paintingInfo");

let paintings = ["https://1.bp.blogspot.com/-tyHrKpWH2vg/U103DhT_rbI/AAAAAAAA_0U/wjzvAJIWHW0/s1600/edouard_leon_cortes_b1443_paysage_anime_de_personnages_wm.jpg",
"https://www.stefanbaumann.com/wp-content/uploads/2013/08/Sashone-Falls.jpg",
"https://tse1.mm.bing.net/th?id=OIP.B7X6bv8El1N9gdyETi63oQHaFH&pid=Api",
"https://tse2.mm.bing.net/th?id=OIP.O7wLYa8Iu42rD6NxjZbO5gHaEo&pid=Api"];

let titles = [
    "Groen veld",
    "Waterval",
    "Pad",
    "Kluizenaar"
]

let descriptions = [
    "Een mooi groen veld met wat bomen en een pad. De lucht is helder met een paar kleine wolkjes. Op de achtergrond is een mooi heuvellandschap te zien.",
    "Een prachtige waterval in een kaal landschap. De waterval wordt opgebroken door enkele rotsen.",
    "Een mooi pad op een groen, kaal landschap, met een bewolkte lucht op de achtergrond.",
    "Een eenzaam huis verborgen onder een bladerendak in een dicht bos. Er is een waterrad, aangesloten op een rivier waarover een bruggetje loopt, en er is een pad waarvan het lijkt alsof het het bos uit leidt."
]

function changeImage(index) {
    console.log("button '" + index + "' pressed");

    myImage.src = paintings[index];
    myTitle.innerHTML = titles[index];
    paintingInfo.innerHTML = descriptions[index];

    console.log("test");

}