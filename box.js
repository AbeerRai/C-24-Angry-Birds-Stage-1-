class box {


constructor(x,y,width,height)
{
    var box_options = {

        restitution : 1.0,
        density : 0.3,
        friction : 1.0
        
      }
      
        this.body = Bodies.rectangle(x,y,width,height,box_options);
        this.width = width;
        this.height = height;

        World.add (world,this.body);


        
        
      }



display()
{
    var pos = this.body.position;
    var angle = this.body.angle;

push();

translate(pos.x, pos.y);

rotate (angle);
rectMode(CENTER);
strokeWeight(4);
stroke("orange")
fill ("green");

 rect(0, 0, this.width, this.height);

 pop ();

}


}
