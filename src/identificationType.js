
// src/models/IdentificationType.js
const pool = require('../config/db');

class IdentificationType {
    constructor(id, code, name, description) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
    }

    static async findAll() {
        const [rows] = await pool.query('SELECT * FROM identification_types');
        return rows.map(row => new IdentificationType(row.id, row.code, row.name, row.description));
    }

    static async findById(id) {
        const [rows] = await pool.query('SELECT * FROM identification_types WHERE id = ?', [id]);
        if (rows.length === 0) return null;
        return new IdentificationType(rows[0].id, rows[0].code, rows[0].name, rows[0].description);
    }
}

module.exports = IdentificationType;