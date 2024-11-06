import { Model } from 'sequelize-typescript';
declare class Paciente extends Model {
    nombreMascota: string;
    nombreCliente: string;
    sexo: string;
    codigoMascota: number;
    observaciones: string;
}
export default Paciente;
