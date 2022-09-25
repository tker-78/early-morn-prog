class Animal {
  constructor(name, age, color, legs) {
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
  }

  run(){
    console.log(`${this.name} can run fast`)
  }
}

class Dog extends Animal{
  constructor(name = 'dog', age = 3, color = 'red', legs = 4) {
    super()
  }
  run(){
    console.log(`ワンワン can run fast`)
  }

}

class Cat extends Animal{
  
}



const fox = new Animal('fox', '12', 'black', '4')

fox.run()


const dog = new Dog()

dog.run()