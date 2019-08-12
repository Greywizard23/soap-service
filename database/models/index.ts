import {Sequelize} from "sequelize-typescript";

export default new Sequelize({
    database: "apidb",
    dialect: "mysql",
    host: "mysql",
    password: "pass",
    storage: ":memory:",
    username: "root",
});
