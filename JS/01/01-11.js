let number = prompt("값을 입력하세요.");
// prompt()는 사용자가 텍스트를 입력할 수 있도록 안내하는 선택적 메세지를 갖고 있는 대화 상자를 띄웁니다.
let list='';
        list +='<table>';
        list += `<table><tr><th>증감 연산자</th><th>설명</th><th>예) let number = ${number}</th></tr>`;
        list += `<tr><td>변수++</td><td>기존의 변수 값에 1을 더합니다(후위).<td>alert(number++) 답: ${number++}</td></tr>`;
        list += `<tr><td>++변수</td><td>기존의 변수 값에 1을 더합니다(전위).<td>alert(++number)답: ${++number}</td></tr>`;
        list += `<tr><td>변수--</td><td>기존의 변수 값에 1을 뺍니다(후위).<td>alert(number--)답: ${number--}</td></tr>`;
        list += `<tr><td>--변수</td><td>기존의 변수 값에 1을 뺍니다(전위).<td>alert(--number)답: ${--number}</td></tr>`;
        list += '</table>';
        document.write (list);

