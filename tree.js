class Tree{
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/tree.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,1250,490,450,450);
        pop();
      }
}