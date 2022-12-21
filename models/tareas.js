const Tarea = require('./tarea');
require('colors');
class Tareas {
	_listado = {};
	get listadoArr() {
		const listado = [];

		Object.keys(this._listado).forEach((key) => listado.push(this._listado[key]));

		return listado;
	}
	constructor() {
		this._listado = {};
	}
	borrarTarea(id = '') {
		if (this._listado[id]) {
			delete this._listado[id];
		}
	}
	cargarTareasFromArray(tareas = []) {
		tareas.forEach((tarea) => {
			this._listado[tarea.id] = tarea;
		});
	}
	crearTarea(desc = '') {
		const tarea = new Tarea(desc);
		this._listado[tarea.id] = tarea;
	}
	listadoCompleto() {
		console.log('');
		this.listadoArr.map(({ desc, completadoEn }, index) => {
			const idx = `${index + 1}`.green;
			console.log(`${idx} ${desc} :: ${completadoEn === null ? `${'Pendiente'}`.red : `${'Completada'}`.green}`);
		});
	}
	listarPendientesCompletadas(completadas = true) {
		console.log('');
		let contador = 0;
		this.listadoArr.map(({ completadoEn, desc }) => {
			if (completadas) {
				if (completadoEn) {
					contador += 1;
					console.log(
						`${(contador + '.').green} ${desc} :: ${
							completadoEn === null ? `${'Pendiente'}`.red : `${completadoEn}`.green
						}`
					);
				}
			} else {
				if (!completadoEn) {
					contador += 1;
					console.log(
						`${(contador + '.').green} ${desc} :: ${
							completadoEn === null ? `${'Pendiente'}`.red : `${'Completada'}`.green
						}`
					);
				}
			}
		});
	}
}
module.exports = Tareas;
