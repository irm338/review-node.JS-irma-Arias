// src/index.js
const readline = require('readline');
const Course = require('./models/Course');
const Schedule = require('./models/Schedule');
const City = require('./models/City');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log('\n================================');
    console.log('   SISTEMA DE GESTIÓN - CAMPUS   ');
    console.log('================================');
    console.log('1. Listar Cursos');
    console.log('2. Registrar Nuevo Curso');
    console.log('3. Listar Programación de Clases');
    console.log('4. Listar Ciudades');
    console.log('5. Salir');
    
    rl.question('\nSeleccione una opción: ', async (opt) => {
        switch(opt) {
            case '1':
                const courses = await Course.findAll();
                console.log('\n--- CURSOS REGISTRADOS ---');
                console.table(courses);
                break;
            case '2':
                rl.question('Código del curso: ', (code) => {
                    rl.question('Descripción: ', async (description) => {
                        await Course.create({ code, description, intensity: 40, weight: 5, active: 1 });
                        console.log('¡Curso creado exitosamente!');
                        mostrarMenu();
                    });
                });
                return;
            case '3':
                const schedules = await Schedule.findAll();
                console.log('\n--- PROGRAMACIÓN DE CLASES ---');
                console.table(schedules);
                break;
            case '4':
                const cities = await City.findAll();
                console.log('\n--- CIUDADES ---');
                console.table(cities);
                break;
            case '5':
                console.log('Saliendo del sistema...');
                rl.close();
                process.exit(0);
                return;
            default:
                console.log('Opción no válida.');
        }
        mostrarMenu();
    });
}

mostrarMenu();