"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePaciente = exports.upDatePaciente = exports.altaPacientes = exports.listPacienteById = exports.listarPacientes = void 0;
const Paciente_models_1 = __importDefault(require("../models/Paciente.models"));
const listarPacientes = async (req, res) => {
    try {
        const paciente = await Paciente_models_1.default.findAll();
        res.json({ data: paciente });
    }
    catch (error) {
        console.log(error);
    }
};
exports.listarPacientes = listarPacientes;
const listPacienteById = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente_models_1.default.findByPk(id);
        if (!paciente) {
            return res.status(404).json('El paciente no existe');
        }
        res.json({ data: paciente });
    }
    catch (error) {
        console.log(error);
    }
};
exports.listPacienteById = listPacienteById;
const altaPacientes = async (req, res) => {
    try {
        const paciente = await Paciente_models_1.default.create(req.body);
        res.json({ data: paciente });
    }
    catch (error) {
        console.log(error);
    }
};
exports.altaPacientes = altaPacientes;
const upDatePaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente_models_1.default.findByPk(id);
        if (!paciente) {
            return res.status(404).json('Paciente no encontrado');
        }
        await paciente.update(req.body);
        await paciente.save();
        res.send({ data: paciente });
    }
    catch (error) {
        console.log(error);
    }
};
exports.upDatePaciente = upDatePaciente;
const deletePaciente = async (req, res) => {
    try {
        const { id } = req.params;
        const paciente = await Paciente_models_1.default.findByPk(id);
        if (!paciente) {
            return res.status(404).json('Paciente no encontrado');
        }
        await paciente.destroy(req.body);
        res.send({ data: "paciente eliminado" });
    }
    catch (error) {
        console.log(error);
    }
};
exports.deletePaciente = deletePaciente;
//# sourceMappingURL=paciente.js.map