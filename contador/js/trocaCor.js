let corBackground = document.querySelector('body');
let corAtualBG = corBackground.className;

let corNumero = document.querySelector('span');
let botaoMais = document.querySelector('.mais');
let botaoMenos = document.querySelector('.menos');
let botaoInverter = document.querySelector('img');

function mudaCor() {
	corBackground.classList.remove(`${corAtualBG}`);

	if (corAtualBG == 'BGbranco') {
		corBackground.classList.add(`BGpreto`);
		corAtualBG = `BGpreto`;

		corNumero.classList.remove(`NUMpreto`);
		corNumero.classList.add(`NUMbranco`);

		botaoMais.classList.remove(`BTNpreto`);
		botaoMais.classList.add(`BTNbranco`);

		botaoMenos.classList.remove(`BTNpreto`);
		botaoMenos.classList.add(`BTNbranco`);

		botaoInverter.classList.add(`IMGbranca`);
	} else {
		if (corAtualBG == 'BGpreto') {
			corBackground.classList.add(`BGbranco`);
			corAtualBG = `BGbranco`;

			corNumero.classList.remove(`NUMbranco`);
			corNumero.classList.add(`NUMpreto`);

			botaoMais.classList.remove(`BTNbranco`);
			botaoMais.classList.add(`BTNpreto`);

			botaoMenos.classList.remove(`BTNbranco`);
			botaoMenos.classList.add(`BTNpreto`);

			botaoInverter.classList.remove(`IMGbranca`);
		}
	}
}

botaoInverter.addEventListener('click', () => {
	mudaCor();
});
