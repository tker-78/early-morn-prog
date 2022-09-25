class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
	getFullName(){
		const fullName = this.firstName + this.lastName
		return fullName
	}
  // ゲッターメソッド
  get getFirstName(){
    return this.firstName
  }
  // セッターメソッド
  set setFirstName(firstName){
    return this.firstName = firstName
  }
  
}


class Student extends Person {
  obeyRules() {
    console.log("I will obey your own rule, sir.")
  }
}

const student = new Student()

student.obeyRules()