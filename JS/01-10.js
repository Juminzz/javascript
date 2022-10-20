// 변수를 선언한다.
let list = '';
console.log (typeof (list));
// 연산자를 사용한다.
list += '<table>'   // list += '<ul>';
list += ' <li><mark>Hello 반갑다는 뜻이야!</mark></li><br>';
list += ' <li><mark>JavaScript로 작성되었어.</mark></li>';
list += '</ul><br>'
list += '<h2>&& and ||</h2>';
list += '<table class="tb">'
list += '<tr><td class="f1">false<td class="f1">false</td><td class="f1">false</td></td></tr><tr><td>true</td><td>false</td><td>false</td></tr>'
list += '<tr><td>false</td><td>true</td><td>false</td></tr><tr><td>false</td><td>false</td><td>false</td></tr>'
list += '<td>true</td><td>true</td><td>true</td>'
list += '</table>';

list += '<table>'   // list += '<ul>';
list += '</ul>'
list += '<h2>&& and ||</h2>';
list += '<table class="tb">'
list += '<tr><td class="f2">false<td class="f2">false</td><td class="f2">false</td></td></tr><tr><td>true</td><td>false</td><td>true</td></tr>'
list += '<tr><td>false</td><td>true</td><td>true</td></tr><tr><td>false</td><td>false</td><td>false</td></tr>'
list += '<td>true</td><td>true</td><td>true</td>'
list += '</table>';
document.write (list);   // 문서를 크롬에다가 출력한다. (메소드)