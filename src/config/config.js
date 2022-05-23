"use strict";
exports.__esModule = true;
exports.config = void 0;
function config() {
    return {
        app: {
            port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
        },
        database: {
            port: process.env.POSTGRES_PORT,
            host: process.env.POSTGRES_HOST,
            name: process.env.POSTGRES_DB,
            password: process.env.POSTGRES_PASSWORD
        }
    };
}
exports.config = config;
