const score = document.querySelector('#score');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const inp = document.querySelector('#input');
const sbt = document.querySelector('#submit');


let count = 0;
sbt.addEventListener('click', () => {
	let val = inp.value;
	val = val.trim();
	val = Number(val);

	let mult = document.querySelector('#num1').textContent * document.querySelector('#num2').textContent;

	mult = Number(mult);

	if (document.querySelector('#input').value === '') {
		alert('Please enter a number')
	} else if (val === mult) {
		console.log("inside if")
		count++;
		score.textContent = count;
		num1.textContent = Math.floor(Math.random() * 50);
		num2.textContent = Math.floor(Math.random() * 50);
	} else {
		num1.textContent = Math.floor(Math.random() * 50);
		num2.textContent = Math.floor(Math.random() * 50);
	}
})



