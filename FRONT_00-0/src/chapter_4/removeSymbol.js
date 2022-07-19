// Функция на вход принимает две строки - сообщение (обычная строка с текстом) и символ который надо удалить из этого сообщения

function removeString(message, symbol) {
	let str = '';
	for (let i = 0; i < message.length; i++) {
		if (message[i] === symbol)
			continue;
		else
			str += message[i];
	}
	return str;
}

// console.log(removeString("Большое и интересное сообщение", "о")); // Бльше и интересне сбщение
// console.log(removeString("Hello world!", "z")); // Hello world!
// console.log(removeString("А роза азора", "А")); //  роза азора
