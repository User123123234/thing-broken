class Platform{
    constructor(x,y,width,height){
    var options = {
    isStatic:true,
    density:1,
    }
this.body = Bodies.rectangle(x,y,width-20,height-90,options)
this.width=width;
this.height=height;

//loading the image
this.image= loadImage('images/platform.png')

    World.add(world,this.body)
    
    }
    display(){
    var pos = this.body.position;
    //imageMode(CENTER)
  imageMode(CENTER)
    fill("blue");  
    //image
    image(this.image, pos.x, pos.y, this.width,this.height);
    }
    }