import fs from 'fs'
import path from 'path'
import { on } from 'events'

export async function handler(event, context) {
  const filePath = path.join(process.cwd(), 'src/data/comentarios.json')

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    if (event.httpMethod === 'POST') {
      const { nombre, comentario } = JSON.parse(event.body)

      data.Comentarios.push({
        Nombre: nombre,
        Comentario: comentario,
        Fecha: new Date().toISOString()
      })

      fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

      return { statusCode: 200, body: JSON.stringify({ mensaje: 'Comentario guardado' }) }
    } else if (event.httpMethod === 'GET') {
      return { statusCode: 200, body: JSON.stringify(data) }
    }
  } catch (error) {
    console.error('Error leyendo el archivo de comentarios:', error)
    return { statusCode: 500, body: 'Internal Server Error' }
  }
}