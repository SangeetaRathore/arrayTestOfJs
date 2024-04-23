// Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.
function sumOfArray(arra){
         sum=0
         for (let i=0; i<arra.length; i++){
                  sum+=arra[i]
         }
         return sum
}


let myArray = [1,2,3,4,5,6,7,8,9]
// console.log(sumOfArray(myArray));


// Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.
function averageOfArray(arra){
         sum=0
         for (let i=0; i<arra.length; i++){
                  sum+=arra[i]
         }
         let answer = sum/arra.length
         return answer
}


let myArray2 = [1,2,3,4,5,6,7,8,9]
// console.log(averageOfArray(myArray2));


// Find Maximum Element: Write a function to find the maximum element in an array of integers.
function maxElementOfArray(arra){
         let maxValue=arra[0]
         for(let i=1; i<arra.length; i++){
                  if (maxValue<arra[i]){
                           maxValue=arra[i]
                  }
         }
         return maxValue
}

let myArray3 = [1,2,5,777,12,8,90]
// console.log(maxElementOfArray(myArray3));


// Find Minimum Element: Write a function to find the minimum element in an array of integers.
function minElementOfArray(arra){
         let minValue=arra[0]
         for(let i=1; i<arra.length; i++){
                  if (minValue>arra[i]){
                           minValue=arra[i]
                  }
         }
         return minValue
}

let myArray4 = [10,2,5,777,12,8,90]
// console.log(minElementOfArray(myArray4));


// Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.
function searchElementInArray(arra,value){
         for (let i = 0; i < arra.length; i++) {
                  if (arra[i] === value){
                           return i;     
                  }
         }
         return -1;
}


let myArray5 = [10,2,5,777,12,8,90]
// console.log(searchElementInArray(myArray5,6));



// Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).
function sortingArray(arra){
         const lenOfArra = arra.length;
         for (let i = 0; i < lenOfArra - 1; i++) {
                  for (let j = 0; j < lenOfArra - 1 - i; j++) 
                  {
                           if (arra[j] > arra[j + 1])
                           {
                                    const tend = arra[j];
                                    arra[j] = arra[j + 1];
                                    arra[j + 1] = tend;
                           }
                  }
         }
         return arra;



}
              
let myArray7 = [5, 3, 8, 1, 2];
// console.log(sortingArray(myArray7));

              





// Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.
function filteringEvenNumber(arra){
         let newArray = []
         for (let i = 0; i < arra.length; i++){
                  if (arra[i]%2===0){
                           newArray.push(arra[i]);
                  }
         }
         return newArray
         
} 
let myArray6 = [12,34,66,57,23,100]
// console.log(filteringEvenNumber(myArray6));



let obje={
         nae:"sangee",
         class : "23"
}

p=Object.keys(obje)
// console.log(typeof(p[0]));



let arra1 = [1,3]
let arra2 = [5,6]
// newArray = arra1.concat(arra2)
// console.log(newArray);

function addElement(arra1,arra2){
         for(let i=0;i<arra2.length;i++){
                  arra1.push(arra2[i])
         }
         return arra1
}

// console.log(addElement(arra1,arra2));



// Convert array to string sepearted by - (hyphen) and return the string.
// [1, 2, 3]
// '1-2-3'

let arra3 =[1,2,3,4]
let newString = ""
for(let i=0;i<arra3.length;i++){

         let s= arra3[i].toString()
         newString+=s
         if (i<arra3.length-1)
                  newString+='-'
         else{
                  // console.log(newString);
                  console.log(`"${newString}"`);
                  console.log(typeof(newString));
         }
         

} 

