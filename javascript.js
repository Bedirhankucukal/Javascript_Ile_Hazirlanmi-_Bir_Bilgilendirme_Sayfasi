let name = prompt("Lütfen Bize Kendinizi Tanıtınız")

let nameDOM = document.querySelector("#myName")

nameDOM.innerHTML = name




/*Saat Satırı Başlangıcı*/
let clockDOM = document.querySelector("#myclock")

function startTime()
{
 var today=new Date();
 var h=today.getHours();
 var m=today.getMinutes();
 var s=today.getSeconds();
 var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

 gunler = gunler[today.getDay()]
 h=checkTime(h);
 m=checkTime(m);
 s=checkTime(s);
 document.getElementById('myClock').innerHTML=h+":"+m+":"+s+"-"+gunler;
 t=setTimeout('startTime()',1000);
}

function checkTime(i)
{
if (i<10)
 {
  i="0" + i;
 }
return i;
}

startTime()

/*Saat Satırı Bitişi*/


