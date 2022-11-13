// bai 1;
let str = 'duong ba xinh'
let a = str.split(' ');
let s = '';
for(let i =0; i< a.length ;i++){
  s+= a[i][0].toUpperCase() + a[i].substring(1,a[i].length) + " ";
}
console.log(s)
//bai 2:
let str2 = ' javascript is cool '
let t = '';
for(let c of str2.trim()){
    if(c == 'a'){
        c = 4;
    }else if( c == 'e'){
        c = 3;
    }else if(c == 'i'){
        c = 1;
    }else if(c == 'o'){
        c = 0
    }else if ( c == 's'){
        c = 5;
    }
    t+= c;
}
console.log(t)
// bai 3:

document.getElementById('btn').addEventListener('click',(e)=>{
    let b3 = document.getElementById('put').value;
    if(b3.length >= 3 && b3.endsWith('ing')){
        b3 = b3 + 'ly';
    }else if(b3.length <3){
      b3 = b3;
    }else{
        b3 += "ing";
    }  
    document.getElementById('value-show').textContent = `result:${b3}`;
})
