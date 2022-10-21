let number = Number(prompt("1 ~ 9 사이의 값을 입력하세요."));
let aa1 = alert('1 ~ 9 사이 값만 적어 주세요 아니면 종료됩니다.')
aa1 = Number(1,2,3,4,5,6,7,8,9);
if (aa1=Number){
    alert('계속')
}else{
    alert('종료')
}
list='';
list += `<table><tr><td> &nbsp;&nbsp; ${+number+" x 1 = " +number*1}</td></tr>`;
list += `<table><tr><td> &nbsp;&nbsp; ${+number+" x 2 = " +number*2}</td></tr>`;
list += `<table><tr><td> &nbsp;&nbsp; ${+number+" x 3 = " +number*3}</td></tr>`;
list += `<table><tr><td> &nbsp;&nbsp; ${+number+" x 4 = " +number*4}</td></tr>`;
list += `<table><tr><td> &nbsp;&nbsp; ${+number+" x 5 = " +number*5}</td></tr>`;
list += `<table><tr><td> &nbsp;&nbsp; ${+number+" x 6 = " +number*6}</td></tr>`;
list += `<table><tr><td> &nbsp;&nbsp; ${+number+" x 7 = " +number*7}</td></tr>`;
list += `<table><tr><td> &nbsp;&nbsp; ${+number+" x 9 = " +number*9}</td></tr></table>`;
document.write (list);