import app from './src/app.js'
import conexionDatabase from './src/config/database.js'

const port = process.env.PORT

const initServer = async () => {
  try {
    await conexionDatabase.openConexion()
    app.listen(port, '0.0.0.0', () => {
      console.log(`Conexión establecida correctamente en: ${port}`)
    })
  } catch (error) {
    console.error('Error al iniciar servidor', error)
    process.exit(1)
  }
}

initServer()
