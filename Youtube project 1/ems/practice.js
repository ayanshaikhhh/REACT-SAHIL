// ✅ 1. reverse() Method (Direct aur Easiest)
// Ye original array ko change kar deta hai.
// const arr = [1,2,3,4,5];
// arr.reverse()
// console.log(arr)













// ✅ 2. Spread Operator + reverse() (Original array safe rahe)
// Agar aap original array ko change nahi karna chahte:
// const arr = [1,2,3,4,5];
// const rev = [...arr].reverse();
// console.log(arr)
// console.log(rev);






// let num = 1;
// while (num < 101) {
//     if(num % 5 === 0) console.log(num);
//     num++;
    
// }




// const obj = {
//     name : "ayan",
//     age : 20,
//     state : "rajasthan"
// }
// for(let key in obj) {
//     console.log(key)
// }





// const numb = [55, 56, 12, 88,32,1,0,5];
// numb.sort((a,b) => b - a);
// console.log(numb)







const arr = [2,88,44,55,1,55,66,2,44,14,36,74,12];
const res = arr.sort((a,b) => {
    return a - b
})
console.log(res)












































