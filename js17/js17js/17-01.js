let count = 0;
let min = 0;
let st = 0;
function clicked(){
    min==0&&count==0?
    st = setInterval(() => {
    count++
    console.log(`${min}분 ${count}초`);
    if (count == 59){
        min+=1;
        count=-1;
    }},1000):min=0,count=0;
}
// 삼항연산자(? :) = ?앞에 값이 참이면 : 앞에 값 출력하고 아니면 : 뒤에 값 출력
function clicked2(){
    clearInterval(st);
}


// setTimeout은 일정시간후 한번 실행하는 함수
// setInterval은 일정시간을 간격으로 콜백함수를 반복 호출하는 함수
// clearInterval은 setInterval가 반복하는 있는걸 멈추게 하는 함수
// clearTimeout은 일정 시간후 함수를 한번 실행하는것(setTimeout)을 중지하는 함수
