
const fs = require('fs');
const pool = require('./src/config/db'); // Ajusta la ruta si es necesario

async function setupDatabase() {
    try {
        console.log('Leyendo el archivo database.sql...');
        const sqlScript = fs.readFileSync('database.sql', 'utf8');

        // Dividir el script por punto y coma para ejecutar consulta por consulta
        const queries = sqlScript
            .split(';')
            .map(q => q.trim())
            .filter(q => q.length > 0);

        console.log('Ejecutando consultas en MySQL...');
        for (let query of queries) {
            await pool.query(query);
        }

        console.log('¡Base de datos y tablas creadas con éxito!');
        process.exit();
    } catch (error) {
        console.error('Error al crear la base de datos:', error.message);
        process.exit(1);
    }
}

setupDatabase();