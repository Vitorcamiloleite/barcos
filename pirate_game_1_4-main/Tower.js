class Tower{
constructor(x,y,widht,height){
var opitions={
isStatic:true
}

    this.image = loadImage("assets/tower.png")
    this.widht = widht
    this.height= height
    this.body = Bodies.rectangle(x, y, this.widht, this.height, opitions)
    World.add(world,this.body)

};  

display(){
var pos = this.body.position;
var angle = this.body.angle
push()
translate(pos.x, pos.y)
rotate(angle)
imageMode(CENTER)
image(this.image, 0, 0, this.widht , this.height)
pop()

}











}