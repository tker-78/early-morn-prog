class Statistics {
  constructor(numArray) {
    this.numbers = numArray
  }

  Count() {
    return this.numbers.length
  }
}

const num = new Statistics([1,2,3,4,5])
console.log(num.Count())