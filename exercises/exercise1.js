// Why is it not logging 'hey Amy'?
function greet(person) {
  if (person == { name: 'amy' }) {
    return 'hey amy';
  } else {
    return 'hey arnold';
  }
}
console.log(greet({ name: 'amy' }));
