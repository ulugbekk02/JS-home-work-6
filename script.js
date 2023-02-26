

var money = prompt("o'zingizda mavjud so'mmani kiriting")

var a = 1065034;  // dollar kursi tiynda
var b = 1165003;  // yevro kursi tiynda

// tiyinda olganligimni sababi, butun sondan keyingi qismi ( ,34 va ,03 ) larni yaxlitlab ketmasligi. 

var x = 500;  // samalyot
var y = 250;  // mexmonxona
var z = 120;  // sayohat

var summa = ( x + y ) * a + z * b;

var siteTitleIf = document.querySelector(".text__if");
var siteTitleElse = document.querySelector(".text__else");

if ( money * 100 >= summa ) {
    siteTitleIf.textContent = `Oq yo'l, Alisher!`;
}
else {
    siteTitleElse.textContent = `Alisher, ozgina sabr qilish kerak bo'lar ekan!`;
}