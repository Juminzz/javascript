// 어레이의 평균을 구해라,
// const arr = [12,46,23,57,12,54,62];
// const ar = arr.reduce(function(acc,cur){
//     return acc+cur;     // arr 배열에 있는 값의 합
// },0)
// const average = ar / arr.length;    // 배열의 합중에 arr의 배열의 개수를 나누면
//                                     // 평균이 나옴
// console.log(average); 
// console.log(ar);



// const arr1 = Array(10).fill(0).reduce((a,c,i,ar)=>{
//     ar[i]=i+1
//     return ar;
// },0)

// reduce(function(accumulator, currentValue, currentIndex, array)

const arr=[1,2,3,4,5,6]
const arr_rt = arr.reduce((a,c,i,ar)=>{
    avg = a+c 
    if (i==ar.length-1){return avg/ar.length}
    return avg
},0)
console.log (arr_rt);