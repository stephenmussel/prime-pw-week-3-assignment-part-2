console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
// ANSWER: change i<4 to i<6
for (let i=0; i<6; i++) {
  console.log('count from 0 to 5', i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
// ANSWER: change i=0 to i=3
for (let i=3; i<6; i++) {
  console.log('count from 3 to 5', i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
/* for some reason, this was the first solution i came up with. my mind just went to an if statement no remainder. i think the intended solution is below.
for (let i=2; i < 11; i++) {
  if (i % 2 === 0) { // no remainder
    console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):', i);
  }
}
*/
// ANSWER: change i=0 to i=2 (this starts i at 2), i<6 to i<11 (this tells i when to stop) i++ to i += 2 (this adds 2 to i)
for (let i=2; i<11; i += 2){
  console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):', i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
for (let i=5; i>0; i--) {
  console.log('STRETCH: countdown from 5 to 0', i);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
for (each of stars) {
  console.log('Some stars:', each);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
let i = 0;
while (i < stars.length) {
console.log('Some stars using while:', stars[i]);
i++;
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
let numbers = 0;
while ( numbers < 6) {
console.log('count from 0 to 5', numbers);
numbers++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
let max = 10;
let min = 4;
while( max > min) {
console.log('count backwards from 10 to 5', max);
max--;
}
