
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

// Crear el pool de conexiones usando los datos de tu .env
const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'escuela_acme',
    port: process.env.DB_PORT || 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Probar la conexión
try {
    const connection = await pool.getConnection();
    console.log("¡Conexión exitosa a la base de datos escuela_acme!");
    connection.release();
} catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
}

export default pool;