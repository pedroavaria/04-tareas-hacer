import fs from 'fs'
const archivo = './db/data.json'

const guardarDB = (data:any) => {
    fs.writeFileSync(archivo,JSON.stringify( data))
}

const leerDB = () => {
    let data:any = ''
    if (!fs.existsSync(archivo)) {
        return null
    }
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' })
    try {
        data = JSON.parse(info)
    } catch (error) {
        data = ''
    }

    return data
    
}

export {guardarDB,leerDB}