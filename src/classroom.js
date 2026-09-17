// src/models/Classroom.js
const pool = require('../config/db');

class Classroom {
    constructor(id, code, description, capacity, active) {
        this.id = id;
        this.code = code;
        this.description = description;
        this.capacity = capacity;
        this.active = active;
    }

    static async findAll() {
        const [rows] = await pool.query('SELECT * FROM classrooms');
        return rows.map(row => new Classroom(row.id, row.code, row.description, row.capacity, row.active));
    }

    static async findById(id) {
        const [rows] = await pool.query('SELECT * FROM classrooms WHERE id = ?', [id]);
        if (rows.length === 0) return null;
        return new Classroom(rows[0].id, rows[0].code, rows[0].description, rows[0].capacity, rows[0].active);
    }
}

module.exports = Classroom;