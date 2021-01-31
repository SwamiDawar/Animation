class Drop{
        constructor(x, y, width, height){
            var options ={
                'restitution': 0,
                'friction':1.0,
                'isStatic': false
            }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
        }
        display(){
            push()
           if(this.body.position.y > 1000){
               this.body.position.x = random(0, 600);
               this.body.position.y = random(0, 100);
           }
            pop()
        }
}