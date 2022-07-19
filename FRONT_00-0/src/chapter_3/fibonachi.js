// Напишите функицю, которая принимает индекс числа из ряда Фибоначчи и возвращает его значение
// Предположим, что ряд Фибоначчи начинается с 0 индекса


function fibo(index) {
	if (index < 0)
		return 0;
	if (index < 2)
		return 1;
	return fibo(index - 1) + fibo(index - 2);
}

// console.log(fibo(5)); // Вернет 8
// console.log(fibo(1)); // Вернет 1 
// console.log(fibo(8)); // Вернет 43 
// console.log(fibo(21)); // Вернет 17711 
