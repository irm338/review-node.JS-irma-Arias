const pool = require('../config/db');

class CourseScheduleModel {
    // Obtener todos los horarios
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM `Horarios de cursos`');
        return rows;
    }

    // Crear un nuevo horario de curso
    static async create(scheduleData) {
        const { courseId, teacherId, classroomId, fechaInicio, fechaFin, activo } = scheduleData;
        const query = `
            INSERT INTO \`Horarios de cursos\` (ID del curso, ID del profesor, ID de aula, Fecha de inicio, fechaFin, activo)
            VALUES (?, ?, ?, ?, ?, ?)
        `;
        const [result] = await pool.query(query, [courseId, teacherId, classroomId, fechaInicio, fechaFin, activo ?? true]);
        return result.insertId;
    }
}

module.exports = CourseScheduleModel;