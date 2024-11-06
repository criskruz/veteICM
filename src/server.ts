import express from 'express'
import routerPac from './routers/pacientes'
import db from './config/db'

// conexion con BD

async function connectDB(){
    try {
    await db.authenticate()
    db.sync()
    console.log('conexion EXITOSA con la BD')
        
    } catch (error) {
        console.log(error)
        console.log('error de conexion con la BD')
    }
}
connectDB()

const server=express()
server.use(express.json())

server.use('/veterinaria/paciente',routerPac)



export default server