
// src/index.js
const express = require('express');
const Course = require('./models/Course');
const Schedule = require('./models/Schedule');
const UserFactory = require('./patterns/UserFactory');
const { SubjectSchedule, StudentObserver } = require('./patterns/ClassNotifier');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// RUTA 1: Ver todos los cursos (MySQL)
app.get('/courses', async (req, res) => {
    const cursos = await Course.obtenerTodos();
    res.json(cursos);
});

// RUTA 2: Crear un curso nuevo
app.post('/courses', async (req, res) => {
    const { code, description, intensity, weight } = req.body;
    const nuevoId = await Course.crear(code, description, intensity, weight);
    res.json({ message: 'Curso creado con éxito', id: nuevoId });
});

// RUTA 3: Programar una clase
app.post('/schedules', async (req, res) => {
    const { course_id, teacher_id, classroom, start_date, end_date } = req.body;
    const scheduleId = await Schedule.programarClase(course_id, teacher_id, classroom, start_date, end_date);
    
    // Opcional: Disparar el Patrón Observer aquí de ejemplo
    const notificador = new SubjectSchedule();
    notificador.agregarObservador(new StudentObserver('Estudiante de prueba'));
    notificador.notificadorObservadores('¡Se ha programado una nueva clase!');

    res.json({ message: 'Clase programada con éxito', id: scheduleId });
});

// RUTA 4: Probar Patrón Factory (Crear usuarios)
app.post('/users', (req, res) => {
    try {
        const { tipo, nombre, email } = req.body;
        const usuario = UserFactory.crearUsuario(tipo, nombre, email);
        res.json({ message: 'Usuario creado usando Factory', usuario });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});