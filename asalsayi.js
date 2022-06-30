let sayi=parseInt(prompt("kontrol etmek isteğiniz sayıyı giriniz!"),10);
let sayac=0;
for(let bolen=3;bolen<sayi;bolen++)
{
    if(sayi%bolen==0)
    sayac++;
}

if(sayi<0)
console.log("Lütfen pozitif bir tam sayı giriniz!");
else if(sayac==0 && sayi!=1)
console.log("sayi asaldir!");
else
console.log("sayi asal degildir!");