let numeroAtual = 0;

function incrementaNumero() {
	numeroAtual += 1;
	document.querySelector('span').textContent = numeroAtual;
}

function decrementaNumero() {
	numeroAtual -= 1;
	document.querySelector('span').textContent = numeroAtual;
}

let botaoSoma = document.querySelector('.mais');
let botaoSubtracao = document.querySelector('.menos');

botaoSoma.addEventListener('click', () => {
	incrementaNumero();
});

botaoSubtracao.addEventListener('click', () => {
	decrementaNumero();
});
