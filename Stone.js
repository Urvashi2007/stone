class Stone{
		constructor(x,y,height,width)
	// assign options to the rubber ball
	{var options = {
		'density':12,
		'friction': 0.9,
		'restitution':0.8
	  };
	
      this.body=Bodies.rectangle(x,y,width,height, options)
		this.width=width
		this.height=height
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position
            var angle=this.body.angle 	
			push()
			translate(pos.x,pos.y);
            rotate(angle)
            
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
            rect(0,0,this.width,this.height)
			pop()
	}

}