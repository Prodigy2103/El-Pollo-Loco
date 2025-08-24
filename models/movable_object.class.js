class MovableObject {
    x = 120;
    y = 300;
    width = 100;
    height = 150;
    img;


    // constructor

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('movin right');
    }

    moveleft() {

    }
}