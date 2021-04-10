import * as colors from 'colors'
import line from 'readline'
const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();
        console.log('========================='.green)
        console.log('  Seleccione una opción'.green);
        console.log('=========================\n'.green)

        console.log(`${'1'.green}. Crear tarea`);
        console.log(`${'2'.green}. Listar tareas`);
        console.log(`${'3'.green}. Listar tareas completadas`);
        console.log(`${'4'.green}. Listar tareas pendientes`);
        console.log(`${'5'.green}. Completar tarea(s)`);
        console.log(`${'6'.green}. Borrar Tarea`);
        console.log(`${'0'.green}. Salir`);

        const readline = line.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question(`\nSeleccione una opcion: `, (opt) => {
            readline.close()
            resolve(opt)
        })
    })



}

const pausa = () => {
    return new Promise<void>(resolve => {
        const readline = line.createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question(`\nPresione ${'ENTER'.green} para continuar\n`, (opt) => {
            readline.close()
            resolve()
        })

    })
}

export { mostrarMenu, pausa };














