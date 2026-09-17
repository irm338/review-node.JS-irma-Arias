
const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'tu_base_de_datos',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Validar conexión
async function probarConexion() {
    try {
        const connection = await pool.getConnection();
        console.log('✅ ¡Conexión exitosa a la base de datos MySQL!');
        connection.release();
    } catch (error) {
        console.error('❌ Error al conectar a la base de datos:', error.message);
    }
}

probarConexion();

module.exports = pool;

