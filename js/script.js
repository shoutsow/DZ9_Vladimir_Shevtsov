document.write(`<p class="zad1">`);
document.write("Задание 1.1)" + '&emsp;');
for (let i = 1; i <= 50; i++) {
    document.write(i + ' ');
}
document.write(`</p>`);
document.write(`<p class="zad1">`);
document.write(`<br>`);
document.write("Задание 1.2)" + '&emsp;');
for (let i = 35; i >= 8; i--) {
    document.write(i + ' ');
}
document.write(`</p>`);
document.write(`<br>`);
document.write(`<hr>`);

document.write(`<p class="zad2">`);
document.write("Задание 2)" + `<br>`);
let i = 89;
while (i >= 11) {
    document.write(i + `<br>`);
    i--;
}
document.write(`</p>`);
document.write(`<br>`);
document.write(`<hr>`);

document.write(`<p class="zad3">`);
document.write("Задание 3)" + '&emsp;');
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
document.write(sum)
document.write(`</p>`);
document.write(`<br>`);
document.write(`<hr>`);

document.write(`<p class="zad4">`);
document.write("Задание 4)" + `<br>`);
let sum1 = 0;
for (let i = 1; i <= 5; i++) {
    sum1 += i;
    document.write('сумма' + i + '&ensp;' + '=' + '&ensp;' + sum1 + `<br>`);
}
document.write(`</p>`);
document.write(`<br>`);
document.write(`<hr>`);

document.write(`<p class="zad5">`);
document.write("Задание 5.while)" + '&emsp;');
let i1 = 8;
while (i1 <= 56) {
    if (i1 % 2 == 0) {
        document.write(i1 + ' ');
    }
    i1++;
}
document.write(`</p>`);
document.write(`<br>`);
document.write(`<p class="zad5">`);
document.write("Задание 5.for)" + '&emsp;');
for (let i = 8; i <= 56; i++) {
    if (i % 2 == 0) {
        document.write(i + ' ');
    }
}
document.write(`</p>`);
document.write(`<br>`);
document.write(`<hr>`);

document.write(`<p class="zad6">`);
document.write("Задание 6)" + `<br>`); // что-то не придумал, как тут вложенными циклами сделать
for (let i = 1; i < 10; i++) {
    let mul = 0;
    let dig = 2;
    mul = dig * i;
    document.write(dig + `&ensp;` + '*' + `&ensp;` + i + `&ensp;` + '=' + `&ensp;` + mul + `<br>`);
}
document.write(`<br>`);
for (let i = 1; i < 10; i++) {
    let mul = 0;
    let dig = 3;
    mul = dig * i;
    document.write(dig + `&ensp;` + '*' + `&ensp;` + i + `&ensp;` + '=' + `&ensp;` + mul + `<br>`);
}
document.write(`<br>`);
for (let i = 1; i < 10; i++) {
    let mul = 0;
    let dig = 4;
    mul = dig * i;
    document.write(dig + `&ensp;` + '*' + `&ensp;` + i + `&ensp;` + '=' + `&ensp;` + mul + `<br>`);
}
document.write(`<br>`);
for (let i = 1; i < 10; i++) {
    let mul = 0;
    let dig = 5;
    mul = dig * i;
    document.write(dig + `&ensp;` + '*' + `&ensp;` + i + `&ensp;` + '=' + `&ensp;` + mul + `<br>`);
}
document.write(`<br>`);
for (let i = 1; i < 10; i++) {
    let mul = 0;
    let dig = 6;
    mul = dig * i;
    document.write(dig + `&ensp;` + '*' + `&ensp;` + i + `&ensp;` + '=' + `&ensp;` + mul + `<br>`);
}
document.write(`<br>`);
for (let i = 1; i < 10; i++) {
    let mul = 0;
    let dig = 7;
    mul = dig * i;
    document.write(dig + `&ensp;` + '*' + `&ensp;` + i + `&ensp;` + '=' + `&ensp;` + mul + `<br>`);
}
document.write(`<br>`);
for (let i = 1; i < 10; i++) {
    let mul = 0;
    let dig = 8;
    mul = dig * i;
    document.write(dig + `&ensp;` + '*' + `&ensp;` + i + `&ensp;` + '=' + `&ensp;` + mul + `<br>`);
}
document.write(`<br>`);
for (let i = 1; i < 10; i++) {
    let mul = 0;
    let dig = 9;
    mul = dig * i;
    document.write(dig + `&ensp;` + '*' + `&ensp;` + i + `&ensp;` + '=' + `&ensp;` + mul + `<br>`);
}
document.write(`</p>`);
document.write(`<br>`);
document.write(`<hr>`);

document.write(`<p class="zad7">`);
document.write("Задание 7)" + '&emsp;');
let n = 1000;
let i2 = 0;
while (true) {
    n = n / 2;
    i2++;         // если инкремент счётчика опустить под if, то кол-во итераций будет неправильное
    if (n < 50) {
    break;
    }
}
document.write('Получается число:' + `&ensp;` + n + `&emsp;`);
document.write('количество итераций:' + `&ensp;` + i2);
document.write(`</p>`);
document.write(`<br>`);
document.write(`<hr>`);

document.write(`<p class="zad8">`);
document.write("Задание 8)" + '&emsp;');
let sum2 = 0;
let num = 0;
let i3 = 0;
while(true) {
    num = +prompt('Вводите числа, пока не надоест. Затем введите "0" или оставьте поле пустым', 777);
    sum2 += num;
    if (!num) {
        break;
    }
    i3++;
}  
document.write('Общая сумма:' + `&ensp;` + sum2 + `&emsp;`);
document.write('Среднее арифметическое:' + `&ensp;` + (sum2 / i3) + `&emsp;`);
if (isFinite(num) !== true) {
    /*document.write*/alert('К сожалению в процессе было введено НЕ число. Произвести вычисления невозможно!');
}
document.write(`</p>`);
document.write(`<br>`);
document.write(`<hr>`);

document.write(`<p class="zad9">`);
document.write("Задание 9)" + '&emsp;');
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let num1 = '';
let min = 0;
let max = 0;
for (let i = 0; i < str.length; i++) {
  num1 += str[i];
  if (+str[i] && !+str[i+1]) { // честно сказать, подсмотрел решение в гугле и этот сложносочинённый if ломает мозг!
    if (isFinite(min) !== true || num1 < +min) {
        min = +num1;
    }
    if (isFinite(max) !== true || num1 > +max) {
        max = +num1;
    }
    num1 = '';
  }
}
document.write('самое маленькое число в строке:' + `&ensp;` + min + `&emsp;`);
document.write('самое большое число в строке:' + `&ensp;` + max);
document.write(`</p>`);
document.write(`<br>`);
document.write(`<hr>`);

document.write(`<p class="zad10">`);
document.write("Задание 10)" + '&emsp;');
let num2 = prompt('Введите произвольное целое число n', 12345);
if (isFinite(num2) == true) {
    document.write('Введено число n:' + `&ensp;` + num2 + `&emsp;`);
}
else {
    document.write('Введено НЕ число!' + `&emsp;`);
}
let brk = '';
for (let i = 0; i < num2.length; i++) {
    if (isFinite(+num2[i]) == true) {
        brk += (num2[i] + '. ');
    }
}
document.write('число n состоит из цифр:' + `&ensp;` + brk + `&emsp;`);
let kol = 0;
for (let i = 0; i < num2.length; i++) {
    if (isFinite(+num2[i]) == true) {
    kol++;
    }
}
document.write('цифр в числе n:' + `&ensp;` + kol + `&emsp;`);
let sum3 = 0;
for (let i = 0; i < num2.length; i++) {
    if (isFinite(+num2[i]) == true) {
        sum3 += +num2[i];
    }
}
document.write('сумма цифр числа n:' + `&ensp;` + sum3 + `&emsp;`);
let rev = '';
for (let i = num2.length; i >= 0; i--) {
    if (isFinite(+num2[i]) == true) {
        rev += num2[i];
    }
}
document.write('обратный порядок цифр числа n:' + `&ensp;` + rev + `&emsp;`);
document.write(`</p>`);
document.write(`<br>`);