/*const rows = 12;  // must be odd number
for(let x = rows; x >=1; x -=2){
    for(let z = rows; z > x+1; z-=2){
        process.stdout.write('  ') 
    }
    for(let j = 1 ; j <= x ; j++){
        process.stdout.write('x ') 
    }
    console.log(' ')
}*/

/*
const rows = 5;
for (let x = 1; x <= rows; x++) {
     for (let i = 1; i <= x ; i++) {
         process.stdout.write('x ') 
     }
     console.log(' ')
}
*/
/*
// js character code -> A(65),B(66),C(67)....
// code to character

const a = String.fromCharCode(65)  // A 
const b = String.fromCharCode(66)  // B 
*/
const rows = 10;
for (let x = 1; x <= rows; x++) {
    for (let y = rows; y > x ; y--) {
       process.stdout.write('  ')
    }
    for (let z = 1; z <= x ; z++) {
          process.stdout.write('* ')
    }
    console.log(' ')
}

