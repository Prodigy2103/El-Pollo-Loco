// TODO: imgHelper, intervallHub, MovableObject importieren

export class Chicken extends MovableObject {
    constructor() {
        super().loadImage("./assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"); // hier erbt chicken von der superclass MovableObject

        this.x = 200 + Math.random() * 500;
        this.y = 390;
        this.width = 50;
        this.height = 70;
    }
}
