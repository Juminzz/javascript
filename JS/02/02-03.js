list ='';
list += '<table><tr><td>Boolean(0)</td><td>false</td></tr>';
list += '<table><tr><td>Boolean(NaN)</td><td>false</td></tr>';
list += '<table><tr><td>Boolean("")</td><td>false</td></tr>';
list += '<table><tr><td>Boolean(null)</td><td>false</td></tr>';
list += '<table><tr><td>let 변수</td><td>undefined</td></tr>';
list += '<table><tr><td>Boolean(변수)</td><td>false</td></tr></table>';
document.write (list);