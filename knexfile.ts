import type { Knex } from 'knex'
import dotenv from 'dotenv';

dotenv.config();

const config: {[key: string]: Knex.Config} = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            port: Number(process.env.DB_PORT),
            database: process.env.DB_NAME,
            password: process.env.DB_PASS,
            user: process.env.DB_USER
        },
        migrations: {
            directory: 'src/database/migrations',
            extension: 'ts'
        },
        useNullAsDefault: true
    }
}

export default config;