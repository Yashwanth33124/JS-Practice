

// Variables in js
//in js,variables are used to store and manipulate data.they serves as named container
// types of variables
//var
//let
//const\





//Methods

//push() = ("adds one or more elements to the end of the array and return the new length")

// var show = ["nani","asdfgh"]
// show.push("beauty")
// console.log(show.length)


//pop = ("Remove the last element from the array and returns the new array")
// let books = ["phy","che","math"]
// var show = books.pop()
// console.log(books)
// console.log(`${show} removed elemest`)


//shift = ("removes the first element from an array and returns the element")
// let states = ["hyd","delhi","mumbai"]
// states.shift()
// console.log(states)


//unshift = ("adds one or element to the begining of an array and returns the new array")
// let scores = ["22","43","432"]
// scores.unshift("asdfghjk")
// console.log(scores)



//concat = ("ocmbines two or more arrays and returns a new array")
// let scores = [1,2,3,4,5,6,7]
// let names = ["nani","yash","yogi"]
// let show = scores.concat(names)
// console.log(show)



//join = ("creates a new string by a conactenating all the elements  of an array and returns a string")
// let  show  = [1,2,3,4,5,5,6,4532,45321,645321]
// var my = show.join()
// console.log(my)

//slice = ("returns a shallow copy of portions of an array into a new array")
// let show = [1,2,3,4,5,7,"nani","kjsjhsdfkjfdhj"]
// let bye = show.splice(0,3)
// console.log(bye)



//splice = ("changes the array ny removing,replacing,adding")
// let numbers = [1,2,3,4,5,6,7,8,9]
// let neW = numbers.splice(0,4,"nani")
// console.log(neW)
// console.log(numbers)


//for each = ("executes a provided function once for each array elements")
// let students = ["nani","monesh","bunny"]
// students.forEach(function(item){
//    console.log(item)
// })


// let arr = [1,2,3,3,4,5,6,6,7,8,9,9,9]
// function show(arr) {
//     let unique = []
//     for( ele of arr) {
//         if(unique.indexOf(ele) == -1) {
//             unique.push(ele)
//         }
//     }
//     return unique

// }
// console.log(show(arr))


// function show() {
//     console.log("hii everyone")
// }
// function show1(callback) {
//     console.log("bye every one")
//     callback()
// }
// show(show1)
// let count = 0
// for(var n = 0; n < 1000; n++) {
//     var isprime = true
//     if(n <= 1) {
//         isprime = false
//     } else {
//         for( var i = 2; i < n; i++) {
//             if(n % i == 0) {
//                 isprime = false;
//                 break;
//             }
//         }
//     }
//     if(isprime) {
//         console.log(`${n} prime numbers`)
//         count++
//     }
// }
// console.log("prime numbers from 1 t0 1000:",count)










