// Вам нужно написать функцию которая принимает в кач-ве аргумента массива чисел и удаляет все повторяющиеся значения

function removeReps(array) {
    if (!Array.isArray(array)) {
        return array
    }

    return [...(new Set(array))]
}

// console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11])); // [1,2,4,5,6,8,9,11]
// console.log(removeReps([1, 1, 1, 1])); // [1]
// console.log(removeReps([1, 2, 3, 4, 5, 6])); // [1,2,3,4,5,6]

