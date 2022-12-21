const { inquirerMenu, pausa } = require('./helpers/inquirer');
require('colors');

const main = async () => {
	console.log('Hola mundo');
	let opt = '';
	do {
		opt = await inquirerMenu();
		console.log({ opt });

		await pausa();
	} while (opt !== '0');
};
main();
