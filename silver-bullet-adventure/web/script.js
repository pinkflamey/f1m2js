
const myTitle = document.getElementById("myTitle");
const myImage = document.getElementById("myImage");
const myInput = document.getElementById("myInput");

const buttonNoord = document.getElementById("buttonNoord");
const buttonOost = document.getElementById("buttonOost");
const buttonZuid = document.getElementById("buttonZuid");
const buttonWest = document.getElementById("buttonWest");

let directionButtons = {
    "noord": document.getElementById("buttonNoord"),
    "oost": document.getElementById("buttonOost"),
    "zuid": document.getElementById("buttonZuid"),
    "west": document.getElementById("buttonWest")
}

let current_index = 0;

let locaties = [
{
    "title":"Plaats 0",
    "img":"img/0.jpg",
    "directions": {
        "zuid": 1
    }
},
{
    "title":"Plaats 1",
    "img":"img/1.jpg",
    "directions": {
        "noord": 0,
        "oost": 5,
        "zuid": 4,
        "west": 2
    }
},
{
    "title":"Plaats 2",
    "img":"img/2.jpg",
    "directions": {
        "oost": 1,
        "zuid": 3
    }
},
{
    "title":"Plaats 3",
    "img":"img/3.jpg",
    "directions": {
        "noord": 2
    }
},
{
    "title":"Plaats 4",
    "img":"img/4.jpg",
    "directions": {
        "noord": 1
    }
},
{
    "title":"Plaats 5",
    "img":"img/5.jpg",
    "directions": {
        "noord": 10,
        "oost": 6,
        "west": 1
    }
},
{
    "title":"Plaats 6",
    "img":"img/6.jpg",
    "directions": {
        "oost": 7,
        "zuid": 11,
        "west": 5
    }
},
{
    "title":"Plaats 7",
    "img":"img/7.jpg",
    "directions": {
        "noord": 9,
        "zuid": 8,
        "west": 6
    }
},
{
    "title":"Plaats 8",
    "img":"img/8.jpg",
    "directions": {
        "noord": 7
    }
},
{
    "title":"Plaats 9",
    "img":"img/9.jpg",
    "directions": {
        "zuid": 7,
        "west": 10
    }
},
{
    "title":"Plaats 10",
    "img":"img/10.jpg",
    "directions": {
        "oost": 9,
        "zuid": 5
    }
},
{
    "title":"Plaats 11",
    "img":"img/11.jpg",
    "directions": {
        "noord": 6
    }
}]

function show(index) {

    myTitle.innerHTML = locaties[index].title;
    myImage.src = locaties[index].img;
    current_index = index;

    updateDirections();

}

function updateDirections() {
    let possible = locaties[current_index].directions;

    let possible_keys = Object.keys(possible);

    let button_keys = Object.keys(directionButtons);

    for(const key of button_keys) {
        directionButtons[key].style.visibility = "hidden";
    }
    for(const key of possible_keys) {
        directionButtons[key].style.visibility = "visible";
    }
}

function getInput() {
    console.log("input: " + myInput.value);

    show(myInput.value);

    myInput.value = "";
    myInput.focus();
}

function goDirection(direction) {
    let punt_index = locaties[current_index].directions[direction];
    show(punt_index);
}