// class Products {
//   constructor(name, price) {
//     (this.name = name), (this.price = price);
//   }

//   displaymethod() {
//     console.log(`product : ${this.name}`);
//     console.log(`price : $${this.price.toFixed(2)}`);
//   }

//   calculateTotal(salestax){
//       return (this.price + (this.price*salestax)).toFixed(2)
//   }

// }

// const salestax  = 0.05 ;
// const product1 = new Products("shirt", 15);
// const product2 = new Products("pant" , 50);
// const product3 = new Products("underwear" ,100)

// product3.displaymethod();
// const total = product3.calculateTotal(salestax)
// console.log(`Total with all Taxes: $${total}`)

//static = keyword that define properties method that belong to a class itself rather than the objects created from that class (class owns anything static ,not the objects)

/*class Mathutil {
static PI = 3.1415

static getDiameter (radius){
    return radius*2
}
static getCircumfrances (radius){
    return 2* this.PI *radius
}

}

console.log(Mathutil.PI)

console.log(Mathutil.getDiameter(10))
console.log(Mathutil.getCircumfrances(10))
*/

/*class User {
  static userCount = 0;

  constructor(userName) {
    this.userName = userName;
    User.userCount++;
  }
  static getCount() {
    console.log(`There are ${this.userCount} users online`);
  }
  sayHello() {
    console.log(`Hello , my username is ${this.userName}`);
  }
}

const user1 = new User("ishwar");
const user2 = new User("Kishor");
const user3 = new User("Mahi");
console.log(user1.userName);
console.log(user2.userName);
console.log(user3.userName);
user1.sayHello();
user2.sayHello();
user3.sayHello();
console.log(User.userCount);
User.getCount();
*/


//inheritance = allows a new class to inherit propeties and methods from an existing class (parent -> child) helps with code reusability......


/*class Animal {
 alive = true 

 eat (){
    console.log(`This ${this.name} is eating`);
 }
 sleep (){
    console.log(`This ${this.name} is sleeping`);
 }


}


class Rabbit extends Animal {
    name = "rabbit"
    run(){
        console.log(`This ${this.name} is running`)
    }
}
class Fish extends Animal {
    name = "fish"
    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}
class Hawk extends Animal {
    name = "hawk"
    fly(){
        console.log(`This ${this.name} is fling`)
    }
}



const rabbit = new Rabbit ("rabbit")
const fish = new Fish ("fish")
const hawk = new Hawk ("rabbit")
rabbit.run()
fish.swim()
hawk.fly()
rabbit.alive =false;
fish.alive =true;
hawk.alive =true;
console.log(rabbit.alive)
console.log(fish.alive)
console.log(hawk.alive)
rabbit.eat();
fish.eat();
hawk.eat();

*/


// super = keyword is used in classes to call the constructor or access the properties and method of a parent (superclass)
// this = this object
//super = the parent



/*class Animal {
constructor(name , age){
    this.name = name;
    this.age = age;
}
move(speed){
    console.log(`The ${this.name} moves at speed of ${speed}kmh`)
}

}


class Rabbit extends Animal{

    constructor(name , age, runSpeed){
        super(name ,age);
       this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed)
    }
        
}
class Fish extends Animal{
    constructor(name , age, swimSpeed){
        super(name,age);
        this.swimSpeed = swimSpeed;
     }
     swim(){
        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }

}
class Hawk extends Animal{
    constructor(name , age, flySpeed){
        super(name ,age);
        this.flySpeed = flySpeed;
     }
         
     fly(){
        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed)
    }
}

const rabbit = new Rabbit ("ishu" ,20, 22 )
const fish = new Fish ("rachu" ,24, 20 )
const hawk = new Hawk ("pappu" ,15, 23 )
rabbit.run()
fish.swim()
hawk.fly()

console.log(rabbit)
console.log(fish)
console.log(hawk)
*/


// getter =  special method that makes a property readable
//setter = special mathod that makes a property writeable


/*class Rectangle {
    constructor(width , height){
      this.width = width;
      this.height = height;    
    }

    set width (newWidth){
       if (newWidth > 0){
        this._width = newWidth;
       }else{
        console.error("width must be a positive number")
       }
    }

    set height (newHeight){
       if (newHeight > 0){
        this._height = newHeight;
       }else{
        console.error(" must height be a positive number")
       }
    }
    get width (){
        return `${this._width.toFixed(1)} cm`
    }
    get height (){
        return `${this._height.toFixed(1)} cm`
    }
    get area (){
        return`${ (this._width * this._height).toFixed(2)} cm²`
    }
}

const rectangle = new Rectangle(10 , 25)
rectangle.width = 80
rectangle.height = 20
console.log(rectangle.width)
console.log(rectangle.height)
console.log(rectangle.area)
?*/



class Person {
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }
    set firstName(newFirstName){
        if(typeof(newFirstName) === "string" && newFirstName.length> 0){
            this._firstName = newFirstName
            return this._firstName 

        }else{
            console.error(`firstName must be a string and it should be more than 0 character`)
        }
    }
    set lastName(newLastName){
        if(typeof(newLastName) === "string" &&newLastName.length> 0){
            this._lastName = newLastName
        }else{
            console.error(`LastName must be a string and it should be more than 0 character`)
        }
    }
    set age(newAge){
        if(newAge > 0 ){
            this._age =newAge
        }else{
            console.error(`Age should be more than 0`)
        }
    }

        get firstName(){
            return this._firstName 
        }

        get lastName(){
            return this._lastName 
        }
        get fullName(){
           return this._firstName +" "+ this._lastName
        }
        get age(){
            return this._age
        }
       
    
}

const person1 = new Person ("ishu" , "patel" , 22)
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age)
console.log(person1.fullName)




