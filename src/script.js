// Seu código vai aqui;

const input = document.getElementById('stringInput')
const output = document.getElementById('displayResultText')
input.value = '';

//toUpperCase
function toUpperCase(evento){
	evento.preventDefault();
	const resultToUpperCase = input.value.toUpperCase();	
	output.innerHTML = resultToUpperCase;
}
const buttonToUpperCase = document.getElementById('toUpperCase');
buttonToUpperCase.addEventListener('click', toUpperCase);


//toLowerCase

function toLowerCase(evento){
	evento.preventDefault();
	const resultToLowerCase = input.value.toLowerCase();	
	output.innerHTML = resultToLowerCase;
}
const buttonToLowerCase = document.getElementById('toLowerCase');
buttonToLowerCase.addEventListener('click', toLowerCase);

//replace

function replace(evento){
	evento.preventDefault();
	const resultReplace = input.value.replaceAll("-", "");	
	output.innerHTML = resultReplace;
}
const buttonReplace = document.getElementById('replace');
buttonReplace.addEventListener('click', replace);

//concat

function concat(evento){
	evento.preventDefault();
	const resultConcat = input.value.concat(", Vem pra Kenzie!");	
	output.innerHTML = resultConcat;
}
const buttonConcat = document.getElementById('concat');
buttonConcat.addEventListener('click', concat);

//split

function split(evento){
	evento.preventDefault();
	const resultSplit = input.value.split(" ");	
	output.innerHTML = resultSplit;
}
const buttonSplit = document.getElementById('split');
buttonSplit.addEventListener('click', split);