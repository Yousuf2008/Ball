class Box{
    constructor(x,y,widht,height){
     var options={
         restitution=1.0
     }

        this.body= Body.rectangle(x,y,width,height,options)
        this.height=widht;
        this.width=height;
        World.add(world.this.body)

    display(){
        var pos=this.body.position
        rectMode=(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
    }
}