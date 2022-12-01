import {Sequelize} from "sequelize";
import * as dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        dialect:'mysql',
    }
)

export default sequelize