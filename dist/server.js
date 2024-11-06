"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pacientes_1 = __importDefault(require("./routers/pacientes"));
const db_1 = __importDefault(require("./config/db"));
// conexion con BD
async function connectDB() {
    try {
        await db_1.default.authenticate();
        db_1.default.sync();
        console.log('conexion EXITOSA con la BD');
    }
    catch (error) {
        console.log(error);
        console.log('error de conexion con la BD');
    }
}
connectDB();
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use('/veterinaria/paciente', pacientes_1.default);
exports.default = server;
//# sourceMappingURL=server.js.map