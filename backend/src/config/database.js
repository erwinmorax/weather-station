import mongoose from 'mongoose'

let activateconexion = null

const conectarDB = async () => {
  if (activateconexion) {
    return activateconexion
  }

  try {
    const url = process.env.MONGO_DB_URI

    if (!url) {
      throw new Error('MONGO_DB_URI no está definida')
    }

    activateconexion = mongoose.connect(url)

    await activateconexion

    console.log('MongoDB conectado correctamente')

    return activateconexion
  } catch (error) {
    activateconexion = null

    console.error('Error al conectar a MongoDB:', error.message)

    throw error
  }
}

const openConexion = async () => {
  return await conectarDB()
}

const closeConexion = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect()
    activateconexion = null

    console.log('Conexión a MongoDB cerrada')
  }
}

const conexionDatabase = {
  openConexion,
  closeConexion,
}

export default conexionDatabase
