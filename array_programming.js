const arr = [100,105,50,30,405,35,55]

// how to find max value or how to find second max value from arrray
/*let max = arr[0];
let sMax = arr[1]
for (let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
        sMax = max
        max = arr[i]
    }
    if(sMax < arr[i] && max > arr[i]){
        sMax = arr[i]
    } 
    console.log(max,sMax,arr[i])
}
// console.log(max,sMax)*/


// how to reverse array wit extra space 
/*
let extraArr = new Array(arr.length-1)
let k = 0;
for (let i = arr.length-1; i >= 0; i--) {
    extraArr[k]=arr[i]
    k++   
}
console.log(extraArr)*/

// how to reverse an array without extra space 
// we can use while loof to solve it 
/*
let i = 0,j = arr.length-1;
while (i !== j) {
    let temp = arr[i];
    arr[i]=arr[j]
    arr[j]= temp;
    
    i++
    j--
}
console.log(arr)*/

// how to separate all 0 at one side and all 1 at another side 
let arry = [0,1,1,0,1,0,0,1,0,1,0,1,1,0]
/*
let i = 0, j = 0;
while(i < arry.length){
    if(arry[i] == 0){
       let temp = arry[i] 
       arry[i] = arry[j]
       arry[j] = temp;
       j++
    }
    i++
}
console.log(arry)*/