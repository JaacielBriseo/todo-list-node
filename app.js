const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
require('colors');

const main = async () => {
	let opt = '';
	const tareas = new Tareas();
	const tareasDB = leerDB();
	if (tareasDB) {
		tareas.cargarTareasFromArray(tareasDB);
	}

	do {
		opt = await inquirerMenu();
		switch (opt) {
			case '1':
				const desc = await leerInput('Descripcion: ');
				tareas.crearTarea(desc);
				break;
			case '2':
				tareas.listadoCompleto();
				break;
			case '3':
				tareas.listarPendientesCompletadas(true);
				break;
			case '4':
				tareas.listarPendientesCompletadas(false);
		}

		guardarDB(tareas.listadoArr);

		await pausa();
	} while (opt !== '0');
};
main();
