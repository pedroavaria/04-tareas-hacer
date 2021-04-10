import * as colors from 'colors'
import inquirer from 'inquirer'

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desa hacer?',
        choices: [{
            value: '1',
            name: `${'1.'.green} Crear tarea`
        },
        {
            value: '2',
            name: `${'2.'.green} Listar tareas`
        },
        {
            value: '3',
            name: `${'3.'.green} Listar tareas completadas`
        },
        {
            value: '4',
            name: `${'4.'.green} Listar tareas pendientes`
        },
        {
            value: '5',
            name: `${'5.'.green} Completar tarea(s)`
        },
        {
            value: '6',
            name: `${'6.'.green} Borrar tarea`
        },
        {
            value: '0',
            name: `${'0.'.green} Salir`
        }]
    }
]

const inquirerMenu = async () => {
    console.clear();

    console.log('========================='.green)
    console.log('  Seleccione una opción'.white);
    console.log('=========================\n'.green)

    const { opcion } = await inquirer.prompt(preguntas)

    return opcion
}

const pausa = async () => {
    const questions = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ]

    await inquirer.prompt(questions)
}

const leerInput = async (message: string) => {
    const questions = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value: string) {
                if (value.length === 0) {
                    return 'Por favor ingrese un valor'
                }
                return true
            }
        }
    ]

    const { desc } = await inquirer.prompt(questions)
    return desc
}


const listadoTareasBorrar = async (tareas: Array<any>) => {

    const choices = tareas.map((tarea, key) => {
        const idx = `${key + 1}.`.green
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })
    choices.push({
        value: '0',
        name: '0'.green + ' Volver'
    })
    const preguntas = [
        {
            type: 'list',
            name: 'opcion',
            message: 'Borrar',
            choices
        }
    ]
    const { opcion } = await inquirer.prompt(preguntas)
    return opcion
}

const confirmar = async (message: string) => {
    const preguntas = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(preguntas)
    return ok
}

const checkBox = async (tareas: Array<any>) => {
    const choices = tareas.map((tarea, key) => {
        const idx = `${key + 1}.`.green
        return {
            value: tarea.id,
            name: `${idx} ${tarea.desc}`
        }
    })
    const preguntas = [{
        type: 'checkbox',
        name: 'checked',
        message: 'Seleccione las tareas a completar',
        choices
    }]

    const { checked } = await inquirer.prompt(preguntas)

    return checked
}

export { inquirerMenu, pausa, leerInput, listadoTareasBorrar, confirmar, checkBox }