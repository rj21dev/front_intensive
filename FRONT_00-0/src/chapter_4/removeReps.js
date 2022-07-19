// Вам нужно написать функцию которая принимает в кач-ве аргумента массива чисел и удаляет все повторяющиеся значения

function removeReps(array) {
	for (let i = 0; i < array.length - 1; i++) {
		let j = i + 1; 
		while (j < array.length) {
			if (array[j] === array[i]) {
				array.splice(j, 1);
				continue;
			}
			j++;
		}
	}
	return array;
}

// console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1,2,4,5,6,8,9,11]
// console.log(removeReps([1, 1, 1, 1])); // [1]
// console.log(removeReps([1, 2, 3, 4, 5, 6])); //[1, 2, 3, 4, 5, 6]
