import path from 'path'
import {promises as fs} from 'fs'

export async function getCars(){
    const filePath = path.join(process.cwd(), '/mock/car.json')
    return JSON.parse(await fs.readFile(filePath, 'utf-8'))
}