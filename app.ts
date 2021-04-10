require('colors')
import { guardarDB, leerDB } from "./helpers/guardarArchivo";
import { inquirerMenu, pausa, leerInput,listadoTareasBorrar,confirmar } from "./helpers/inquirer";
import { Tareas } from "./models/tareas";

console.clear()

const main = async () => {

    let opt: any = ''
    const tareas = new Tareas()
    const tareasDB = leerDB()

    if (tareasDB) {
        tareas.cargarTareas(tareasDB)
        //Establecer tareas
    }

    // await pausa()

    do {

        opt = await inquirerMenu()

        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripción: ')
                tareas.crearTarea(desc)
                break;
            case '2':
                tareas.listadoCompleto(tareas.listadoArr)
                break;
            case '3':
                tareas.listarPendienteCompletadas(true, tareas.listadoArr)
                break;
            case '4':
                tareas.listarPendienteCompletadas(false, tareas.listadoArr)
                break;
            case '5':
                tareas.listarPendienteCompletadas(false, tareas.listadoArr)
                break;
            case '6':
                const id = await listadoTareasBorrar(tareas.listadoArr)
                if(id !== '0') {
                    const ok = await confirmar('¿Estas tu seguro?')
                    if (ok) {
                        tareas.borrarTarea(id)
                        console.log('Tarea borrada correctamente');
                        
                    }
                }
                //console.log(id);
                
                break;
        }

        console.log('\n');

        guardarDB(tareas.listadoArr)

        if (opt !== '0') await pausa()

    } while (opt !== '0')

}

main()