        // prompt는 괄호 안에 숫자로 넣어도 타입은 문자열로 나온다. 
        // 숫자로 바꿀려면 num 에다가 Number 안에 감싸면 된다.
        let num = prompt('숫자를 입력세여');
        console.log (typeof(num));
        list =''; 
        list += "<h3>입력하신 " + num +" 값은 " + typeof(num)+ " 타입입니다.";
        list += "<br><br>이 타입을 숫자로 변환 하겠습니다.....</h3>";
        list += "<h3><mark>"+Number(num) +" (으)로 변환 완료<mark></mark> <br><br><mark>타입 : " +  typeof(Number(num))+"</h3></mark>";
    
        let str = Number(num);
        list += "<br><br><h3>"+str+" 를(을)  문자로 변환 하겠습니다.....</h3>";
        list += "<h3><mark>" + Number(num)+" (으)로 변환 완료 ! <mark></mark><br><br><mark>타입 : "+ typeof(String(str))+"</h3></mark>";
        document.write (list);