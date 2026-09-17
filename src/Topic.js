
// src/models/Topic.js
const pool = require('../config/db');

class Topic {
    constructor(id, course_id, code, name, description, active) {
        this.id = id;
        this.course_id = course_id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.active = active;
    }

    static async findByCourse(courseId) {
        const [rows] = await pool.query('SELECT * FROM topics WHERE course_id = ?', [courseId]);
        return rows.map(row => new Topic(row.id, row.course_id, row.code, row.name, row.description, row.active));
    }
}

module.exports = Topic;