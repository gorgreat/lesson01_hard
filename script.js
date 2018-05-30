let num = 33721,
    count = 1,
    str,
    pow;
    
str = String(num); //преобразуем в строку

for (var i = 0; i < str.length; i++) {
  count *= +(str.charAt(i)); //разделяем каждый символ и преобразуем его в число и помножаем на себя
}

console.log(`Произведение числа ${num}: ${count}`); //выводим результ произведения чисел 

pow = Math.pow(count, 3); //возводим в 3 степень*/

console.log(`Cтепень числа ${count}: ${pow}` ); //выводим результ возведения в степень

console.log(`Первое число: ${String(pow).charAt(0)}`); //выводим 1 символ

console.log(`Второе число: ${String(pow).charAt(1)}`); //выводим 2 символ




