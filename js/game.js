import { World } from "../models/world.class.js";

let canvas;
// let character = new Image(); // Variable des character wird als ein neues Bild-Objekt (Image) erstellt.
let world;


function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas);
    


    // character.src = './assets/img/2_character_pepe/2_walk/W-21.png'; // Der Pfad zum Bild wird dem character-Objekt zugewiesen, wodurch das Bild geladen wird.

    // ctx.drawImage(character, 20, 20, 50, 150); // Das geladene Bild (character) wird an den Koordinaten (20, 20) auf den Canvas gezeichnet und auf eine Größe von 50 x 150 Pixeln skaliert.

    console.log('My character is', world.character);
    console.log('My Chicken is', world.enemies);
}

init();