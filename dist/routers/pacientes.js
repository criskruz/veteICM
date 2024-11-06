"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paciente_1 = require("../handlers/paciente");
const routerPac = (0, express_1.Router)();
routerPac.get('/', paciente_1.listarPacientes);
routerPac.get('/:id', paciente_1.listPacienteById);
routerPac.post('/', paciente_1.altaPacientes);
routerPac.put('/:id', paciente_1.upDatePaciente);
routerPac.delete('/:id', paciente_1.deletePaciente);
exports.default = routerPac;
//# sourceMappingURL=pacientes.js.map