// src/models/Course.js
const pool = require('../config/db');

class Course {
    constructor(id, code, description, intensity, weight, active) {
        this.id = id;
        this.code = code;
        this.description = description;
        this.intensity = intensity;
        this.weight = weight;
        this.active = active;
    }

    // Método para registrar un curso nuevo en MySQL
    static async crear(code, description, intensity, weight) {
        try {
            const [result] = await pool.execute(
                'INSERT INTO courses (code, description, intensity, weight, active) VALUES (?, ?, ?, ?, 1)',
                [code, description, intensity, weight]
            );
            console.log(`\n✅ ¡Curso guardado con éxito! (ID: ${result.insertId})`);
            return result.insertId;
        } catch (error) {
            console.error('\n❌ Error al crear el curso:', error.message);
        }
    }

    // Método para listar todos los cursos
    static async obtenerTodos() {
        try {
            const [rows] = await pool.query('SELECT * FROM courses');
            return rows;
        } catch (error) {
            console.error('\n❌ Error al obtener los cursos:', error.message);
            return [];
        }
    }
}

module.exports = Course;