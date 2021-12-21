console.log("Script loaded!");

const groentevak = document.getElementById("groentes");
const fruitvak = document.getElementById("fruit");

function zetInFruit(fruitsoort) {
    console.log("function zetInFruit(): " + fruitsoort);

    const nieuwElement = document.createElement('h3');
    nieuwElement.innerHTML = fruitsoort;
    nieuwElement.className = "item";
    fruitvak.appendChild(nieuwElement);
}

function zetInGroentes(groentesoort) {
    console.log("function zetInGroentes(): " + groentesoort);

    const nieuwElement = document.createElement('h3');
    nieuwElement.innerHTML = groentesoort;
    nieuwElement.className = "item";
    groentevak.appendChild(nieuwElement);
}