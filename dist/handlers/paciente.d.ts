import { Request, Response } from "express";
declare const listarPacientes: (req: Request, res: Response) => Promise<void>;
declare const listPacienteById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const altaPacientes: (req: Request, res: Response) => Promise<void>;
declare const upDatePaciente: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
declare const deletePaciente: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export { listarPacientes, listPacienteById, altaPacientes, upDatePaciente, deletePaciente };
