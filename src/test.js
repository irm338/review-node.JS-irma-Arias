import Student from './models/student.js';

async function probarSistema() {
    console.log("Probando el sistema...");

    try {
        // 1. Mostrar todos los estudiantes que hay en la base de datos
        console.log("Consultando lista de estudiantes...");
        const listaEstudiantes = await Student.getAll();
        console.log("Estudiantes actuales:", listaEstudiantes);

        /* 
        // 2. Si quieres registrar uno nuevo de prueba, descomenta estas líneas:
        const nuevoEstudiante = new Student(
            "EST001", 
            "Irma", 
            "Arias", 
            1, 
            "123456789", 
            "F", 
            "2008-03-07", 
            "irma@email.com", 
            "Ciudad de Guatemala", 
            1
        );

        const resultado = await nuevoEstudiante.save();
        console.log("¡Estudiante guardado con éxito!", resultado);
        */

    } catch (error) {
        console.error("Ocurrió un error durante la prueba:", error.message);
    }
}

probarSistema();