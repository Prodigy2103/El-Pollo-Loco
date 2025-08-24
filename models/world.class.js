// TODO: character.js, chicken.js importieren FIXED

import { Character } from "../models/character.class.js";
import { Chicken } from "../models/chicken.class.js";

export class World {
    character = new Character(); // variable des character erbt hier von der superclass MovableObject
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
];
    canvas;
    ctx; // Variable die für den 2D-Zeichenkontext (Zeichenwerkzeug) deklariert wird

    constructor(canvas) {
        this.ctx = canvas.getContext('2d'); // Der 2D-Zeichenkontext des Canvas wird geholt, um darauf zeichnen zu können.
        this.canvas = canvas;
        this.draw(); // googlen da nicht oft verwendet, und man dadurch nicht immer gleich weiß wie es aussieht 
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // leert das canvas bevor es neu bemalt wird

        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        // self = this;
        // requestAnimationFrame(function() {
        //     self.draw();
        // });

        // siehe Lerntagebuch (21.08.2025) zwecks Erklärung
        requestAnimationFrame(() => this.draw());
    }
}