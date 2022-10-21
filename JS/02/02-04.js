let number = prompt("반지름을 입력하세요") ;
let list = '';
list += "<h3>반지름이 " + number + " 일때";
list += "<h3>반지름이 " + number + " 일때 원의 넓이는 <mark>" + (number*number*3.14) + " 이다.</h3></mark>";
list += "<h3>반지름이 " + number + " 일때 원의 둘레는 <mark>" + (2*3.14*number) + " 이다.</mark></h3><br><div></div><br><br><br><br><br><br><br>";

let a1 = prompt ("달러 환률을 적으세요.");
let a2 = prompt ("변환하고자 하는 달러를 적으세요.");
let dollar = Number(a1);
let value = Number(a2);
list += "<h3>달러 환률은 <mark>" + dollar + " 원이다.</h3></mark>";
list += "<h3>변환하고자 하는 달러는 <mark>" + value + " $이다.</h3></mark>";
list += "<h3><mark>원화로는 " + dollar*value + " 원이다.</h3></mark>";
document.write (list);