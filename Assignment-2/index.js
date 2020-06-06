//VICTOR LI 


//============================================================================
//myforEach

// const myForEach = (arr, cb) => {

//   for(let i =0; i < arr.length ; i++)
//   {
//     cb(arr[i])
//   }
// }

// const addOne = (n) => {
//   console.log(n+1)
// }

// const myNums = [1,2,3,4]
// myForEach(myNums, addOne)

//==================================================================
// //myMap

// const myMap = (arr,cb) =>{
//   let result = []
//     for(let i =0; i < arr.length; i++)
//     {
//      result[i] = cb(arr[i]) 
//      console.log(result[i])
    
//     }
// }
// const timesTwo = (n) =>n*2

// const array1 = [10, 20, 30, 40]
// myMap(array1,timesTwo)

//==================================================================
//myFilter

// const myFilter = (arr, cb) => {
//   let result = []
//    for( let i =0; i < arr.length; i++){
//     if(arr[i].length > 6)
//         cb(result, arr[i])
//    }
// }

// const copy = (arr,n) => {
//    arr.push(n)
//    console.log(n)
// }

// let array2 = ["hello", "thankful", "introduction", "lol"]
// myFilter(array2, copy)

//====================================================================
//mySome

//const mySome = (arr,cb) =>{
//   let result = false
//   let count = 0
   
//    while(result != true && count != arr.length)
//    {
//      if(arr[count] % 2 == 0)
//      {
//       result = true
//       cb(result)
      
//      }
//      count++;
//    }
//    if(count == arr.length && result != true)
//     cb(result)
// }

// const even = (n) =>{
//     if(n == true)
//      console.log(n)
//     else
//       console.log(n)
// }

//  let array3 = [9, 1, 10, 5]
//  mySome(array3, even)


//==========================================================
//myEvery

// const myEvery = (arr,cb) =>{
//  let result = false
   
//   for(let i = 0; i < arr.length; i++)
//   {
//     result = cb(arr[i])
//     if(result)
//       {
//         console.log(result)
//         return
//       }
//   }
//   console.log(result)
// }

// const isBelowThan40 = (n) => {
//     if(n < 40)
//       return true
//     else
//       return false
// }

// let array4 = [100, 20, 300, 50]
// myEvery(array4, isBelowThan40)

//==========================================================
//myReduce

    // const myReduce =(arr, cb) => {

    //   var theSum = 0
    //   for(let i =0; i < arr.length; i++)
    //   {
    //     theSum += arr[i]
    //   }
    //   cb(theSum)
    // }

    // const addUp = (n) =>{
    //     console.log(n)
    // }

    // let array5 = [50,100,150,200]
    // myReduce(array5, addUp)

//==========================================================
//myInclude

//   const myInclude = (arr,target) =>{

//     for(let i = 0; i < arr.length; i++)
//     {
//       if(arr[i] == target)
//         return true
//     }
//     return false
//   }

// let array6 = [9,2,10,4,11]
// myInclude(array6, 10)

//===============================================================
//myIndexOf

    // const myIndexOf = (arr,target) =>{ 
    //   for(let i = 0; i < arr.length; i++)
    //   {
    //     if(arr[i] == target)
    //       return i
    //   }
    //   return -1;
    // }

    // let array7 = [10,20,30,40,50]
    // myIndexOf(array7, 0)
//=======================================================================
//myPush

// const myPush = (arr, elementToAdd) =>{
//   arr[arr.length] = elementToAdd
//   for(let i =0; i < arr.length; i++)
//     {
//       console.log(arr[i])
//     }
// }

// let array8 = [1, 2, 3, 4, 5]
// myPush(array8, 6)

//=================================================================================
// myLastIndex

// const myLastIndex =(arr, target) =>{

//   for(let i = arr.length-1; i >= 0; i--)
//   {
//     if(arr[i] == target)
//     return i
//   }
//   return -1;
// }

// let array9 = [50, 50, 30, 40, 50]
// myLastIndex(array9, 50)

//====================================================================================
//grabKey

//   Object.grabKeys = function(obj){
//     const result = []
//     for(const key in obj)
//     {
//       result.push(key)
//     }
//     return result
//   }
// const myObj = {a:1, b:2, c:3}
// Object.grabKeys(myObj)


//===========================================================================
//grabValueobj[value]

//  Object.grabValue = function (obj){
//    const result = []
//     for(const value in obj)
//     {
//           result.push(obj[value])
//     }
//     return result
// }
//     const myObj = {x:10, y:20, z:30}
//     Object.grabValue(myObj)

//====================================================================================
//Sum of range

//   function range(start, end)
//   {
//     let sum  = 0;
//     for(let i = start; i <= end; i++)
//     {
//         sum +=i
//     }
//     return sum
//   }

// console.log(range(1,10))
  
//========================================================================
    //Reverse array1

    // function reverseArray(arr)
    // {
    //   let newArray = []

    //   for(let i = arr.length-1; i >=0 ; i--)
    //       newArray.push(arr[i])

    //       return newArray
    // } 

    // function reverseArrayInPlace(arr)
    // {
    //   let temp 
    //   for(i = 0; i < arr.length/2 ; i++)
    //   {
    //     temp  = arr[i]
    //     arr[i] = arr[arr.length-1-i]
    //     arr[arr.length-1-i] = temp
    //   }
    //   return arr
    // }

    // let array11 = [ 1, 2, 3, 4, 5]
    // console.log(reverseArray(array11))
    // console.log(reverseArrayInPlace(array11))


//==============================================================================
//A list

// function arrayToList(arr)
// {
// let list = {}

//   for(let i = arr.length-1; i >= 0; i-- )
//   {
//      list = { value: arr[i], rest: list };
//   }
//  return list
// }

// function listToArray( list ) {
//   var array = [];
//   for( var node = list; node; node = node.rest )
//     array.push( node.value );

//   return array;
// }

// function prepend( value, rest ) {
//   return {value: value, rest: rest};
// }


// function nth( list, n ) {

//   if( n === 0 )
//     return list.value;
//   else
//     return nth( list.rest, n - 1 );
// }

// console.log(arrayToList([10, 20]));
// console.log(listToArray(arrayToList([10, 20, 30])));
// console.log(prepend(10, prepend(20, null)))
// console.log(nth(arrayToList([10, 20, 30]), 1));

//=============================================================================
//Deep comparison

// var deepEqual = function (x, y) {
//   if (x === y) {
//     return true;
//   }
//   else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
//     if (Object.keys(x).length != Object.keys(y).length)
//       return false;

//     for (var prop in x) {
//       if (y.hasOwnProperty(prop))
//       {  
//         if (! deepEqual(x[prop], y[prop]))
//           return false;
//       }
//       else
//         return false;
//     }

//     return true;
//   }
//   else 
//     return false;
// }
// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false
// console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// // → true

//=============================================================================
//Move zero to right

// function moveZeros (arr) {
//   let temp;
//   let nonZero
//   let zeros


//   for(let i = 0; i < arr.length; i++)
//   {
//     for(let j = 0; j < arr.length; j++)
//     {
//       if(arr[j] == 0 && j+1 != arr.length)
//       {
//         temp = arr[j+1]
//         arr[j+1] = arr[j]
//         arr[j] = temp
//       }
//     }
//   }
//     return arr;
// }

// const array10 = [0,1,0,3,12]
// console.log(moveZeros(array10))


