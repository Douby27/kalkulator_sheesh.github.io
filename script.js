let angka1 = parseInt(prompt("angka pertama"));
let angka2 = parseInt(prompt("angka kedua"));
let simbol = prompt("simbol (must be +,-,*,/,%,^");
let hasil;


if (simbol == "+") {
    hasil = angka1 + angka2;
} else if (simbol == "-") {
    hasil = angka1 - angka2;
} else if (simbol == "*") {
    hasil = angka1 * angka2;
} else if (simbol == "/") {
    hasil = angka1 / angka2;
} else if (simbol == "%") {
    hasil = angka1 % angka2;
} else if (simbol == "^") {
    hasil = angka1 ^ angka2
} else hasil =  "salah!";

document.write(hasil)
