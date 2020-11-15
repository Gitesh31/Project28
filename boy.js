class Boy{
    constructor(x,y,width,height){
        var  options = {
            'isStatic':true,
            'friction':1,
            'density':1.2
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("Images/boy.png");
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