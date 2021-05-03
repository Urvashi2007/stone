class Iron{
	constructor(x,y)
	// assign options to the rubber ball
	{var options = {
		'density':30,
		'friction': 3,
		'restitution':0.8
	  };
	
      this.body=Bodies.rectangle(x,y,50,80, options)
		this.height=50;
		this.width=80;		
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
			fill("brown");
            rect(0,0,this.width,this.height)
			pop()
	}

}