// Напишите функцию, которая будет принимать координаты числа в треугольника Паскаля и будет возвращать значение по координатам
// Если вы не знаете, что такое треугольник Паскаля, советую прочитать перед выполнение задания
// https://cdn.fishki.net/upload/post/201502/04/1414683/947eb978f710426fd0702fd119da506b.gif тут можно посмотреть наглядно принцип работы
// Считай, что начальные координаты 0,0
// Тут, возможно, поможет рекурсия

// y
// 0: 1
// 1: 1   1
// 2: 1   2   1
// 3: 1   3   3   1
// 4: 1   4   6   4   1
// 5: 1   5  10  10   5   1
// 6: 1   6  15  20  15   6   1
//   ==  ==  ==  ==  ==  ==  == 
// x  0   1   2   3   4   5   6

function paskalsTriangle(x, y) {
	if (x > y || x < 0 || y < 0)
		return 0;
	if (x === y || x === 0)
		return 1;
	return paskalsTriangle(x, y - 1) + paskalsTriangle(x - 1, y - 1);   
}

// console.log(paskalsTriangle(2, 3)) // 3
// console.log(paskalsTriangle(4, 5)) // 5
// console.log(paskalsTriangle(1, 1)) // 1
// console.log(paskalsTriangle(0, 0)) // 1
// console.log(paskalsTriangle(3, 5)) // 10
// console.log(paskalsTriangle(3, 6)) // 20
// console.log(paskalsTriangle(3, 4)) // 4
// console.log(paskalsTriangle(3, 1)) // 0 Error
// console.log(paskalsTriangle(-5, 1)) // 0 Error
