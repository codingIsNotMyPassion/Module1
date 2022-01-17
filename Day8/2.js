// circle object creation and methods
var red
class Circle {
    constructor(radius, color){
        this.radius = radius;
        this.color = color;
    }
    getArea() {     
        return this.radius*this.radius*Math.PI
    }
    getCircumference(){
        return 2*Math.PI*this.radius
    }
    getRadius() {
        return this.radius
    }
}
var newCircle = new Circle(4.0, "red");
console.log(newCircle)
console.log(`Area of a circle ${newCircle.getArea()}`)
console.log(`Circumference of a circle ${newCircle.getCircumference()}`)
console.log(`Radius of circle is ${newCircle.getRadius()}`)
