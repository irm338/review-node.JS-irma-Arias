// src/models/City.js
const pool = require('../config/db');

class City {
    constructor(id, code, name) {
        this.id = id;
        this.code = code;
        this.name = name;
    }

    static async findAll() {
        const [rows] = await pool.query('SELECT * FROM cities');
        return rows.map(row => new City(row.id, row.code, row.name));
    }

    static async findById(id) {
        const [rows] = await pool.query('SELECT * FROM cities WHERE id = ?', [id]);
        if (rows.length === 0) return null;
        return new City(rows[0].id, rows[0].code, rows[0].name);
    }
}

module.exports = City;