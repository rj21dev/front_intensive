//Напишите функцию counter, которая при каждом вызове будет возвращать числа на 3 больше, чем в прошлый. Нельзя использовать переменные, объявленные через var!

function closure_demo() {
	let count;

	return function counter() {
		if (count === undefined) {
			count = 0;
		} else {
			count += 3;
		}
		return count;	
	}
}

let counter = closure_demo();

// console.log(counter()); // Функция вернет 0
// console.log(counter()); // Функция вернет 3
// console.log(counter()); // Функция вернет 6
// console.log(counter()); // Функция вернет 9
