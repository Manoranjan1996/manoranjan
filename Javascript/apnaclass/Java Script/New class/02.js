// let fod = ['tomato','potato','hero','batman'];


// let val = fod.shift();
// console.log(val);

// let companys = ['bloomber','microsoft','uder','google','IBM','netflex'];
// companys.shift();
// console.log(companys);
// companys.splice(2,1, 'ola')
// console.log(companys);
// companys.push('amazon')
// console.log(companys);

// function myFun(){
//     console.log("this is the line");
//     console.log('this is the last line');
// }
// myFun();

// const fun = (a ,b)=>{
//     console.log(a +b)
// }

// console.log(fun(4,6))

// function countVoul(str){
//     let count = 0;
//     for(let char of str){
//         if(char ==='a' || char==='e' || char==='i'||char==='o' || char==='u'){
//             count ++;
//         }
//     }
//     console.log(count);

// }
// console.log(countVoul('aeiou'));

//Arrow function//

// const countVoul = (str) => {
//     let count = 0;
//     for(let char of str){
//         if(char ==='a' || char==='e' || char==='i'||char==='o' || char==='u'){
//             count ++;
//         }
//     }
//     console.log(count);

// }
// console.log(countVoul('aeiou'));

// let arr = [1,2,3,4,5,6];
// arr.forEach((val, idex,Array)=>{
//     console.log(val,idex,Array)
// })


// let nums = [2, 3,5 ,62];
// nums.forEach((num)=>{
//     console.log(num*num);
// })

//MAP Mthod

// let nums = [2, 3,5 ,62];

// let newArr = nums.map((num)=>{
//     return num*num;
// })
//  console.log(newArr);

// let nums = [8, 7,1 ,62];

// // let newArr = nums.reduce((num)=>{
// //     return num = 2;
// // })
// //  console.log(newArr);

// const ans = nums.reduce((vip,hip)=>{
//     return vip < hip ? vip:hip;
// });
// console.log(ans);

// const marks = [97,64, 32, 49, 76,93,90 ];
// const ans = marks.filter((mark)=>{
//     return mark >= 90;
// })
// console.log(ans);

let num = prompt("Enter a number: ");

let arr = [];
for(let i = 1;i<=num; i++){
    arr[i-1] = i;
}
console.log(arr);

let arp = arr.reduce((vip,hip)=>{
    return vip + hip;
})

console.log("sum", arp);

let arl = arr.reduce((vip,hip)=>{
    return vip * hip;
})

console.log("Factorials", arl);

 










