let num1 = '';
let num2 = '';
let sign = '';

document.addEventListener('DOMContentLoaded', function() {

	const result = document.querySelector('#result');

	document.querySelector('#clear').onclick = function() {
		num1 = '';
		num2 = '';
		sign = '';
		result.innerHTML = '0';
	};

	document.querySelector('#zero').onclick = function() {
		if (num1 === '0' || num2 === '0')
			return;
		if (num2 === '' && sign === '') {
			if (num1.length === 12) return;
			num1 += '0';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12) return;
			num2 += '0';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#one').onclick = function() {
		if (num2 === '' && sign === '') {
			if (num1.length === 12) return;
			if (num1 === '0')
				num1 = '1';
			else
				num1 += '1';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12) return;
			if (num2 === '0')
				num2 = '1';
			else
				num2 += '1';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#two').onclick = function() {
		if (num2 === '' && sign === '') {
			if (num1.length === 12) return;
			if (num1 === '0')
				num1 = '2';
			else
				num1 += '2';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12) return;
			if (num2 === '0')
				num2 = '2';
			else
				num2 += '2';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#three').onclick = function() {
		if (num2 === '' && sign === '') {
			if (num1.length === 12) return;
			if (num1 === '0')
				num1 = '3';
			else
				num1 += '3';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12) return;
			if (num2 === '0')
				num2 = '3';
			else
				num2 += '3';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#four').onclick = function() {
		if (num2 === '' && sign === '') {
			if (num1.length === 12) return;
			if (num1 === '0')
				num1 = '4';
			else
				num1 += '4';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12) return;
			if (num2 === '0')
				num2 = '4';
			else
				num2 += '4';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#five').onclick = function() {
		if (num2 === '' && sign === '') {
			if (num1.length === 12) return;
			if (num1 === '0')
				num1 = '5';
			else
				num1 += '5';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12) return;
			if (num2 === '0')
				num2 = '5';
			else
				num2 += '5';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#six').onclick = function() {
		if (num2 === '' && sign === '') {
			if (num1.length === 12) return;
			if (num1 === '0')
				num1 = '6';
			else
				num1 += '6';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12) return;
			if (num2 === '0')
				num2 = '6';
			else
				num2 += '6';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#seven').onclick = function() {
		if (num2 === '' && sign === '') {
			if (num1.length === 12) return;
			if (num1 === '0')
				num1 = '7';
			else
				num1 += '7';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12) return;
			if (num2 === '0')
				num2 = '7';
			else
				num2 += '7';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#eight').onclick = function() {
		if (num2 === '' && sign === '') {
			if (num1.length === 12) return;
			if (num1 === '0')
				num1 = '8';
			else
				num1 += '8';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12) return;
			if (num2 === '0')
				num2 = '8';
			else
				num2 += '8';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#nine').onclick = function() {
		if (num2 === '' && sign === '') {
			if (num1.length === 12) return;
			if (num1 === '0')
				num1 = '9';
			else
				num1 += '9';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12) return;
			if (num2 === '0')
				num2 = '9';
			else
				num2 += '9';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#dot').onclick = function() {
		if (num2 === '' && sign === '') {
			if (num1.length === 12 || num1.includes('.')) return;
			num1 += '.';
			result.innerHTML = num1;
		} else {
			if (num2.length === 12 || num2.includes('.')) return;
			num2 += '.';
			result.innerHTML = num2;
		}
	}

	document.querySelector('#plus').onclick = function() {
		sign = '+';
		result.innerHTML = sign;
	}

	document.querySelector('#minus').onclick = function() {
		sign = '-';
		result.innerHTML = sign;
	}
	
	document.querySelector('#mult').onclick = function() {
		sign = 'x';
		result.innerHTML = sign;
	}
	
	document.querySelector('#div').onclick = function() {
		sign = '/';
		result.innerHTML = sign;
	}

	document.querySelector('#equal').onclick = function() {
		if (num1 === 'Overflow') return;
		switch (sign) {
			case '+':
				num1 = (+num1) + (+num2);
				break;
			case 'x':
				num1 = num1 * num2;
				break;
			case '/':
				num1 = num1 / num2;
				break;
			case '-':
				num1 = num1 - num2;
				break;
		}
		if (num1 > 9999999999999)
			num1 = 'Overflow'
		num1 = '' + num1;
		num1 = num1.substr(0, 12);
		result.innerHTML = num1;
	}
});