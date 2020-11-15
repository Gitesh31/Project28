class Stone{
    constructor(x,y,width,height){
        var  options = {
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Images/stone.png");
    World.add(world,this.body);
    }
display(){
    var positionX = this.body.position.x;
    var positionY = this.body.position.y;
    push();
    translate(positionX,positionY);
    imageMode(CENTER);
    this.image(this.image,300,500,this.width,this.height);
    pop();
  }
}