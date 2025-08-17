let grades = [100, 85, 73, 60, 45];
let sum = 0;
let count = 0;

// for (deg of grades) {
//     console.log(deg);
//     sum += deg;
//     count += 1;
// }

// Fail try
// if (grades.length > 70) {
    
//     for (deg of grades) {
//     console.log(deg);
//     sum += deg;
//     count += 1;
    
// }
// } 

// for (deg of grades; deg >= 70; ) {
//     console.log(deg);
//     sum += deg;
//     count += 1;
// }

for (let deg of grades) {
    if (deg >= 70) {
        console.log(deg);
        sum += deg;
        // count += 1;
        count++;
    }
}

console.log('Count = ' + count);
console.log('Sum = ' + sum);

let avr = sum / count;
console.log('Average = ' + avr);