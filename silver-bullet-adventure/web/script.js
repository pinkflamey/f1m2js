
const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

let locaties = [
{
    "title":"plaats 0",
    "img":"img/0.jpg"
},
{
    "title":"plaats 1",
    "img":"img/1.jpg"
},
{
    "title":"plaats 2",
    "img":"img/2.jpg"
},
{
    "title":"plaats 3",
    "img":"img/3.jpg"
},
{
    "title":"plaats 4",
    "img":"img/4.jpg"
},
{
    "title":"plaats 5",
    "img":"img/5.jpg"
},
{
    "title":"plaats 6",
    "img":"img/6.jpg"
},
{
    "title":"plaats 7",
    "img":"img/7.jpg"
},
{
    "title":"plaats 8",
    "img":"img/8.jpg"
},
{
    "title":"plaats 9",
    "img":"img/9.jpg"
},
{
    "title":"plaats 10",
    "img":"img/10.jpg"
},
{
    "title":"plaats 11",
    "img":"img/11.jpg"
}]

function show(index) {

    myTitle.innerHTML = locaties[index].title;
    myImage.src = locaties[index].img;

}

function getInput() {
    console.log("input: " + myInput.value);

    show(myInput.value);

    myInput.value = "";
    myInput.focus();
}