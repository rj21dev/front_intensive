//  В этой задаче нужно будет написать алгоритм поиска, который скажет, можно ли найти входное слово в головоломке поиска слов, которая тоже подается функции на вход.
// Данная задача имеет два уровня сложности :
// - Первый уровень включает в себя исключительно поиск по вертикали и по горизонтали
// - Второй уровень дополнительно включает в себя поиск по диагонали
// - Слова могут быть записаны слева направо и наоборот.

function searchSubString(puzzle, word) {
    let allStrings = [];
    let width = puzzle[0]?.length ?? 0;
    let height = puzzle.length;

    if (width === 0) {
        return false;
    }

    puzzle.forEach(row => {
        if (row.length !== width) {
            return false;
        }

        allStrings.push(row.join(''));
        allStrings.push(row.slice().reverse().join(''));
    });

    for (let i = 0; i < width; i++) {
        let column = puzzle.map(arr => arr[i]);

        allStrings.push(column.join(''));
        allStrings.push(column.reverse().join(''));
    }

    for (let i = 0; i < height; i++) {
        topLeftDiagonal = [];
        topRightDiagonal = [];

        for (let j = 0; i - j >= 0; j++) {
            topLeftDiagonal.push(puzzle[i - j][j]);
            topRightDiagonal.push(puzzle[i - j][height - j - 1]);
        }

        allStrings.push(topLeftDiagonal.join(''));
        allStrings.push(topLeftDiagonal.reverse().join(''));
        allStrings.push(topRightDiagonal.join(''));
        allStrings.push(topRightDiagonal.reverse().join(''));
    }

    for (let i = 1; i < width; i++) {
        bottomLeftDiagonal = [];
        bottomRightDiagonal = [];

        for (let j = 0; i + j < width; j++) {
            bottomLeftDiagonal.push(puzzle[height - j - 1][i + j]);
            bottomRightDiagonal.push(puzzle[height - j - 1][height - j - 1 - i]);
        }

        allStrings.push(bottomLeftDiagonal.join(''));
        allStrings.push(bottomLeftDiagonal.reverse().join(''));
        allStrings.push(bottomRightDiagonal.join(''));
        allStrings.push(bottomRightDiagonal.reverse().join(''));
    }

    return allStrings.some(str => str.includes(word));
}

const examplePuzzle = [
    ["b", "l", "g", "o", "l", "d", "s"],
    ["x", "k", "q", "w", "i", "j", "p"],
    ["a", "n", "w", "k", "k", "p", "n"],
    ["h", "e", "e", "e", "k", "i", "l"],
    ["q", "e", "k", "a", "y", "q", "a"],
    ["h", "u", "h", "a", "e", "a", "u"],
    ["k", "q", "j", "c", "c", "m", "r"],
];

// Level 1
// console.log(searchSubString(examplePuzzle, "like")); // true
// console.log(searchSubString(examplePuzzle, "gold")); // true
// console.log(searchSubString(examplePuzzle, "queen")); // true

// // Level 2
// console.log(searchSubString(examplePuzzle, "cake")); // true