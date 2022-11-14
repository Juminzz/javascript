    
    // let count = 6;
    // let aa2= 0;
    // let time=0;
    // function clicked(){
    //     // const aa1 = setTimeout(()=>     // 일정시간 지난후 1번만실행
    //     // console.log('시작')
    //     // ,500);
    //     aa2 = setInterval(()=>{     // 일정시간동안 코드 실행
    //         count--
    //         console.log(`${count}번째`);
    //         if(count==0){
    //             alert('펑 !');
    //         }
    //     },1000)
    //     setTimeout(()=>{
    //         clearInterval(aa2)
    //     },6000)
    // }
    // function clicked2(){
    //     clearInterval(aa2)      // 클릭하면 일시정지
    // }
    // function clicked3(){
    //     count==0?
    //     aa2 = setInterval(()=>{
    //         count--
    //         console.log(`${count}번째`);
    //         if(count==0){
    //             alert('펑 !');
    //         }
    //     },1000):count=6
    // }
    

    var count = 5
    function clicked(){
        setInterval(function(){
        count--
        console.log(count)
     },1000)
    }
    function clicked2(){
        clearInterval(count)
    }