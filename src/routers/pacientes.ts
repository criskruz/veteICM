import {Router} from 'express'
import { altaPacientes, deletePaciente, listPacienteById, listarPacientes, upDatePaciente } from '../handlers/paciente'

const routerPac=Router()

routerPac.get('/', listarPacientes )
routerPac.get('/:id', listPacienteById)

routerPac.post('/', altaPacientes)
routerPac.put('/:id', upDatePaciente)
routerPac.delete('/:id', deletePaciente)


export default routerPac