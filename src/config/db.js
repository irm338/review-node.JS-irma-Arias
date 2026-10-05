
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: 'escuela_acme', 
    port: process.env.DB_PORT || 3306
    // ELIMINA O COMENTA LA LÍNEA DE 'database' por ahora
});

module.exports = pool;