//let rastgelesayi=Math.floor((Math.random()*90)+10);

let rastgelesayi=53;

let tahmin=parseInt(prompt("Tahmininizi giriniz!"));


let rastgelebirler=rastgelesayi%10;
let rastgeleonlar=parseInt(rastgelesayi/10);

let tahminlebirler=tahmin%10;
let tahminonlar=parseInt(tahmin/10);

if(rastgelesayi==tahmin)
console.log("Tebrikler 10000 Tl kazandınız!");
else if((rastgelebirler==tahminlebirler && rastgeleonlar==tahminonlar)||(rastgelebirler==tahminonlar && rastgeleonlar==tahminlebirler))
console.log("Tebrikler 5000 Tl kazandınız!");
else if(rastgelebirler==tahminlebirler || rastgelebirler==tahminonlar || rastgeleonlar==tahminlebirler||rastgeleonlar==tahminonlar)
console.log("Tebrikler 1000 Tl kazandınız!");
else
console.log("Malesef Kaybettiniz!\n"+"Rastgele sayı:"+rastgelesayi+" Tahmin:"+tahmin);