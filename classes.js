//ex 1
class person {
    constructor(name,age){  //used for initializing the variables
        this.name = name;
        this.age = age;
    }

    fullName () {
        return`${this.name} ${this.age}`;
    }
}

const obj1 = new person('ravi', 22);
const obj2 = new person('teja', 26);
console.log(obj1.fullName());
console.log(obj2.fullName())


//ex 2
class sample {
    constructor(greet){
    this.greet = 'this is a tree';
    }

    fullGreet () {
        console.log(this.greet); 
    }

}
const obj = new sample("this is Sample Object");
console.log(obj.fullGreet());

//ex 3
class objects {
    constructor(x,y){
        this.a = x;
        this.b = y;
    }
    add(){
        return this.a + this.b;
    }
    details(){
        return `my name is devi and age is 21`
    }
}
const obj3 = new objects(3,6);
console.log(obj3.add());
console.log(obj3.details());
    



