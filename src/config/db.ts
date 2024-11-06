import { Sequelize } from "sequelize-typescript";
import dotenv from 'dotenv'
dotenv.config()

const db=new Sequelize(process.env.CONNECTDB_URL!,{
    models:[__dirname + '/../models/**/*']
})

export default db