const pool = require('../config/db');

class TarifaModel {
    // Obtener todas las tarifas
    static async getAll() {
        const [rows] = await pool.query('SELECT * FROM Tarifas');
        return rows;
    }

    // Crear una nueva tarifa
    static async create(tarifaData) {
        const { inscriptionId, tasa, comentarios } = tarifaData;
        const query = `
            INSERT INTO Tarifas (inscripciónId, tasa, comentarios)
            VALUES (?, ?, ?)
        `;
        const [result] = await pool.query(query, [inscriptionId, tasa, comentarios]);
        return result.insertId;
    }
}

module.exports = TarifaModel;