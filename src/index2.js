// src/index.js
const Course = require('./models/Course');
const Classroom = require('./models/Classroom');
const City = require('./models/City');

async function main() {
    console.log('=== SISTEMA DE GESTIÓN (CAMPUS) ===');
    
    // Ejemplo de prueba consultando Cursos y Salones basados estrictamente en la BD
    const courses = await Course.findAll();
    console.log('Cursos encontrados:', courses.length);

    const classrooms = await Classroom.findAll();
    console.log('Salones encontrados:', classrooms.length);
    
    const cities = await City.findAll();
    console.log('Ciudades encontradas:', cities.length);
}

main().catch(console.error);