const { inquirerMenu } = require('./helpers/inquirer');
require('colors');

const main = async () => {
	console.log('Hola mundo');
	let opt = '';
	do {
		opt = await inquirerMenu();
		console.log({ opt });
	} while (opt !== '0');
};
main();
