let a1 = Number(prompt("국어점수"));
let a2 = Number(prompt("수학점수"));
let a3 = Number(prompt("과학점수"));
// prompt("과학점수") 그냥 이렇게 하면 문자형식으로 되어서 평균값이안나온다
// 그래서 앞에 Number를 감싸준다.
alert(`국어점수 ${a1}점\n수학점수 ${a2}점\n과학점수 ${a3}점\n평균점수 : ${(a1+a2+a3)/3} 입니다`);
list += +a1;
list += +a2;
list += +a3;
document.write (list);