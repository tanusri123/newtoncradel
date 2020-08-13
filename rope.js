class rope{
constructor(body1,body2,X,Y)
{this.X=X;
  this.Y=Y
  var options={
      bodyA=body1,
      bodyB=body2,
      pointB:{x:this.X,y:this.Y}
  }
this.rope=Constraint.create(options)
World.add(world,this.rope)    

}
rope1=new rope(bobObject1.body,roofObject.body)
rope2=new rope(bobObject2.body,roofObject.body)
rope3=new rope(bobObject3.body,roofObject.body)
rope4=new rope(bobObject4.body,roofObject.body)
}
display()
{   var pointA=this.rope.bobyA.position;
    var pointB=this.rope.bobyB.position;   

     strokeWeight(2);

     var Anchor2X=pointB.x+this.X;
     var Anchor2Y=pointB.x+this.Y;
     line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
     

}


