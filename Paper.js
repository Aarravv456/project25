class Paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            frictin:0,
            density:1.2			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("paper.png")
		this.body=Bodies.circle(x, y,(r-20)/2 , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		

			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
		
	image(this.image,0,0,this.r, this.r);
			pop()
			
	}

}