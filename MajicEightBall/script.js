// alert("Whach out here comes Dilbert!")


// let userName = 'Dilbert';
// if (userName) {
//   console.log(`Hello, ${userName}!`);
// } 


userQuestion = 'will it rain today?';
console.log(userQuestion);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
}  else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
}  else if (randomNumber === 3) {
  eightBall = 'Cannot perdict now';
}  else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
}  else if (randomNumber === 5) {
  eightBall = 'My sources say no';
}  else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
}  else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
}  else {
  alert('Invalid Question');
}
console.log(eightBall);


