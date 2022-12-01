import {DataTypes} from "sequelize";
import sequelize from "./db_conn.js";

const User = sequelize.define(
    "user",
    {
        username: DataTypes.STRING,
        birthday: DataTypes.DATE,
    }
);

export default User