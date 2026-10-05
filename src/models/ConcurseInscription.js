const pool = require('../config/db');

class ConcurseinscriptionModel {
    // Obtener todas las inscripciones
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM Inscripciones');
        return rows;
    }

    // Crear una nueva inscripción
    static async create(inscriptionData) {
        const { courseScheduleId, studentId, fechaRegistro, activo } = inscriptionData;
        const query = `
            INSERT INTO Inscripciones (courseScheduleId, ID de estudiante, Fecha de registro, activo)
            VALUES (?, ?, ?, ?)
        `;
        const [result] = await pool.query(query, [courseScheduleId, studentId, fechaRegistro, activo]);
        return result.insertId;
    }
}

module.exports = ConcurseinscriptionModel;