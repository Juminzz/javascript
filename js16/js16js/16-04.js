
    function clicked(){
    const aa1 = setTimeout(()=>
    console.log('시작')
    ,500);
    let count = 6;
    const aa2 = setInterval(()=>{
        count--
        console.log(`${count}번째`);
        if(count==1){
            alert('펑 !');
        }
    },1000)
    setTimeout(()=>{
        clearTimeout(aa1)
        clearInterval(aa2)
    },5000)
}
// function clicked2(){
//     setTimeout(()=>{
//         clearTimeout(aa1)
//         clearInterval(aa2)
//     },0)
//     }