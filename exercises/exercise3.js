let dog = {
  name: 'doggo',
  sayName () {
    console.log(this.name)
  }
};
let sayName = dog.sayName;

sayName();