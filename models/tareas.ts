import { Tarea } from "./tarea";
import * as colors from 'colors'
class Tareas {

    _listado: any = {};

    get listadoArr() {
        const listado: Array<Tarea> = []
        Object.keys(this._listado).forEach((key) => {
            const tarea = this._listado[key]
            listado.push(tarea)
        })
        return listado;
    }

    constructor() {
        this._listado = {}
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc)
        this._listado[tarea.id] = tarea
    }
    cargarTareas(tareas: Array<any> = []) {
        tareas.forEach((tarea: any) => {
            this._listado[tarea.id] = tarea
        })
    }

    listadoCompleto(tareas: Array<object>) {
        console.log();
        tareas.forEach((v: any, k) => {
            const number = `${k + 1}.`.green
            const { desc, completadoEn } = v;
            const estado = !completadoEn ? 'Pendiente'.red : 'Completado'.green
            console.log(`${number} ${desc} :: ${estado}`);
        });
    }

    listarPendienteCompletadas(completadas = true, tareas: Array<any>) {
        console.log();
        const tareasFiltered = tareas
            .filter(elemento => completadas ? elemento.completadoEn : !elemento.completadoEn)
            .forEach((tarea, idx) => {
                const number = `${idx + 1}.`.green
                const { desc,completadoEn } = tarea
                const estado = !completadoEn ? 'Pendiente'.red : `${completadoEn}`.green
                console.log(`${number} ${desc} :: ${estado}`);

            })

    }

    borrarTarea(id:string) {
        if (this._listado[id]) {
            delete this._listado[id]
        }
    }

    completarTareas(tareas:Array<any>) {
        tareas.forEach((tarea) => {
            this._listado[tarea].completadoEn = new Date()
        })
    }

}

export { Tareas }