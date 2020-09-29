class Mango{
    constructor(x, y) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        //this.width = width;
        //this.height = height;
        this.image = loadImage("sprites/mango.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 30, 44);
        //image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}