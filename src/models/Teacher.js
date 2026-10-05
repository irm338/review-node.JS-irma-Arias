const pool = require('../config/db');

class TeacherModel {
    // Obtener todos los profesores
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM Profesores');
        return rows;
    }

    // Crear un nuevo profesor
    static async create(teacherData) {
        const { firstName, apellido, identificationTypeId, numeroIdentificacion, correoElectronico } = teacherData;
        const query = `
            INSERT INTO Profesores (firstName, apellido, ID de tipo de identificación, Número de identificación, correo electrónico)
            VALUES (?, ?, ?, ?, ?)
        `;
        const [result] = await pool.query(query, [firstName, apellido, identificationTypeId, numeroIdentificacion, correoElectronico]);
        return result.insertId;
    }
}

module.exports = TeacherModel;