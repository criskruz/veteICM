import { Request, Response } from "express"
import Paciente from "../models/Paciente.models"

const listarPacientes=async(req:Request,res:Response)=>{

    try {
        const paciente=await Paciente.findAll()
        res.json({data:paciente})
        
    } catch (error) {
        console.log(error)
    }
}

const listPacienteById= async(req:Request, res:Response)=>{
    try {
        const {id}=req.params
        const paciente= await Paciente.findByPk(id)
    
        if(!paciente){
            return res.status(404).json('El paciente no existe')
        }

        res.json({data:paciente})
        
    } catch (error) {
        console.log(error)
    }

}

const altaPacientes=async(req:Request,res:Response)=>{
    try {
        const paciente=await Paciente.create(req.body)
        res.json({data:paciente})

    } catch (error) {
        console.log(error)
    }
}

const upDatePaciente = async (req: Request, res: Response) => {
    try {

        const { id } = req.params
        const paciente = await Paciente.findByPk(id)

        if (!paciente) {
            return res.status(404).json('Paciente no encontrado')
        }
        await paciente.update(req.body)
        await paciente.save()

        res.send({ data: paciente })
    } catch (error) {
        console.log(error)
    }
}

const deletePaciente = async (req: Request, res: Response) => {

    try {

        const { id } = req.params
        const paciente = await Paciente.findByPk(id)

        if (!paciente) {
            return res.status(404).json('Paciente no encontrado')
        }

        await paciente.destroy(req.body)

        res.send({ data: "paciente eliminado" })

    } catch (error) {
        console.log(error)
    }

}


export{
    listarPacientes,
    listPacienteById,
    altaPacientes,
    upDatePaciente,
    deletePaciente
}