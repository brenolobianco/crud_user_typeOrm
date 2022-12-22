import { DataSource } from "typeorm"
import path from "path"
import "dotenv/config"
import "reflect-metadata";

const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    } :
    {
        type: 'postgres',
        host: process.env.PGHOST,
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        port: parseInt(process.env.PGPORT),
        database: process.env.DB,
        synchronize: false,
        logging: true,
        entities: [path.join(__dirname, "./entities/*.{ts,js}")],
        migrations: [path.join(__dirname, "./migrations/*.{ts,js}")]
    })

export default AppDataSource