console.log("Script loaded!");

const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");

let seizoenen = [
    {
        "titel" : "Seizoenen",
        "image" : "img/seasons.jpg",
        "bg" : "gray"
    },
    {
        "titel" : "Lente",
        "image" : "img/spring.jpg",
        "bg" : "green"
    },
    {
        "titel" : "Zomer",
        "image" : "img/summer.jpg",
        "bg" : "yellow"
    },
    {
        "titel" : "Herfst",
        "image" : "img/autumn.jpg",
        "bg" : "brown"
    },
    {
        "titel" : "Winter",
        "image" : "img/winter.jpg",
        "bg" : "lightblue"
    }
];

// let seizoen = {
//     "titel" : "lente",
//     "image" : "img/spring.jpg"
// };

function show(index) {

    myTitle.innerHTML = seizoenen[index].titel;
    myImage.src = seizoenen[index].image;
    document.body.style.backgroundColor = seizoenen[index].bg;

}