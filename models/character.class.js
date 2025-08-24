// TODO: imgHelper, intervallHub, MovableObject importieren

export class Character extends MovableObject {

    height = 200;


    constructor() {
        super().loadImage('./assets/img/2_character_pepe/2_walk/W-21.png'); // hier erbt character von der superclass MovableObject
    }

    jump() {

    }
}