// porque não loga hey Amy?
function greet (person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
console.log(greet({ name: 'amy' }))
