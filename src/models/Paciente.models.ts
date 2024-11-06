import {Table, Column, Model, DataType, Default} from 'sequelize-typescript'

@Table({
    tableName:'paciente'
})

class Paciente extends Model{
    @Column({
        type: DataType.STRING(40)
    })
    nombreMascota:string

    @Column({
        type: DataType.STRING(40)
    })
    nombreCliente:string

    @Column({
        type: DataType.STRING(2)
    })
    sexo:string

    @Column({
        type: DataType.INTEGER
    })
    codigoMascota:number

    @Column({
        type: DataType.STRING(100)
    })
    observaciones:string
    
    
}

export default Paciente