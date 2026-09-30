// src/models/Schedule.js
const pool = require('../config/db');

class Schedule {
    static async programarClase(courseId, teacherId, classroomId, startDate, endDate) {
        try {
            const [result] = await pool.execute(
                `INSERT INTO courses_schedules (course_id, teacher_id, classroom, start_date, end_date, active) 
                 VALUES (?, ?, ?, ?, ?, 1)`,
                [courseId, teacherId, classroomId, startDate, endDate]
            );
            console.log(`\n ¡Clase programada con éxito! (ID: ${result.insertId})`);
            return result.insertId;
        } catch (error) {
            console.error('\n Error al programar la clase:', error.message);
        }
    }
}

module.exports = Schedule;

