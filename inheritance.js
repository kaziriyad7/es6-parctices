class Parents{
    constructor(){
        this.fathersName = 'Kazi Babul';
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " "+ this.fathersName;
    }
}

const baby1 = new Child('sumaiya');
const baby2 = new Child('mumu');
console.log(baby1.getFullName());
console.log(baby2.getFullName());


console.log(baby1, baby2)
