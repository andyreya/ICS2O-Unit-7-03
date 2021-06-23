// this connects the "age button" to the
document.getElementById('button').addEventListener('click', comparision)
let age = 0

function comparision () {
// get the age number and convert to an integer
  age = document.getElementById('input').value
  age = parseInt(age)

  // checks if user's age  is younger than 17
  if (age >= 17) {
    document.getElementById('answer').innerHTML = 'You can see an R  movie or an NC-17 movie alone'
  } else if (age >= 13) {
    document.getElementById('answer').innerHTML = 'You can see a PG-13, PG or G movie alone'
  } else if (age >=4 ) {
    document.getElementById('answer').innerHTML = 'You can see a G or PG  movie alone'
  } else {
    document.getElementById('answer').innerHTML = 'You are less than 4 years old. How did you get on this website ?'
  }
}
