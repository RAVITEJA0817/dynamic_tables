var b = document.getElementById('btn').addEventListener('click', myfunct)


function myfunct(){
    let c = document.getElementById('ipt').value
let a = document.getElementById('demo')
let res1 = c
let res2 = Number(res1)
console.log(c)
for(j=2;j<=res2;j++){
a.innerHTML+= "<br>"+"<br>"
for(i = 1;i<=10;i++){
   var res = j*i
    a.innerHTML += j+"*"+i+"="+res + "<br>"
}
}

}


var z = document.getElementById('rfr').addEventListener('click',myfunct2)
function myfunct2(){
    window.location.reload()
}