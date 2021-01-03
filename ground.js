class Ground{
    constructor(x,y,width,height){
    var options = {
    isStatic:true
    }
this.body = Bodies.rectangle(x,y,width,0,options)
  this.width=width
this.height=height

//loading the image
this.image= loadImage('images/ground.png')

    World.add(world,this.body)
    
    }
    display(){
    var pos = this.body.position;
    // imageMode(CENTER)
  imageMode(CENTER)
    fill("blue");  
    //image
    image(this.image, pos.x, pos.y, this.width,this.height);
    }
    }