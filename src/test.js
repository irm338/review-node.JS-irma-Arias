
const readline = require('readline');
const pool = require('./config/db');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenuPrincipal() {
    console.log('\n---  MENÚ PRINCIPAL ESCUELA ACME --- ¿Qué deseas hacer?');
    console.log('1. Gestionar Estudiantes (Registro paso a paso)');
    console.log('2. Gestionar Profesores (Registro paso a paso)');
    console.log('3. Ver Cursos Disponibles');
    console.log('4. Salir');

    rl.question('\nSelecciona una opción: ', (opcion) => {
        switch (opcion.trim()) {
            case '1':
                registrarEstudiante();
                break;
            case '2':
                registrarProfesor();
                break;
            case '3':
                verCursos();
                break;
            case '4':
                console.log('\n¡Gracias por usar Escuela Acme! Hasta luego.');
                rl.close();
                process.exit(0);
                break;
            default:
                console.log('\n Opción no válida, intenta de nuevo.');
                mostrarMenuPrincipal();
                break;
        }
    });
}

// --- REGISTRO DE ESTUDIANTES PASO A PASO ---
function registrarEstudiante() {
    console.log('\n---  REGISTRO DE NUEVO ESTUDIANTE ---');
    
    rl.question('Escribe tu código de estudiante: ', (codigo) => {
        rl.question('Escribe tu nombre: ', (firstName) => {
            rl.question('Escribe tu apellido: ', (apellido) => {
                rl.question('ID de tipo de identificación (ej. 1 para CC, 2 para Pasaporte): ', (identificationTypeId) => {
                    rl.question('Número de identificación: ', (identificationNumber) => {
                        rl.question('Género (M/F): ', (genero) => {
                            rl.question('Fecha de nacimiento (YYYY-MM-DD): ', (birthDate) => {
                                rl.question('Correo electrónico: ', (email) => {
                                    rl.question('Dirección: ', (address) => {
                                        rl.question('ID de ciudad: ', async (cityId) => {
                                            try {
                                                const query = `
                                                    INSERT INTO Estudiantes 
                                                    (codigo, firstName, apellido, identificationTypeId, identificationNumber, gender, birthDate, email, address, cityId) 
                                                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                                                `;
                                                await pool.query(query, [
                                                    codigo, firstName, apellido, identificationTypeId, 
                                                    identificationNumber, genero, birthDate, email, address, cityId
                                                ]);
                                                console.log('\n ¡Estudiante registrado con éxito en la base de datos!');
                                            } catch (err) {
                                                console.log('\n Error al registrar estudiante:', err.message);
                                            }
                                            mostrarMenuPrincipal();
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

// --- REGISTRO DE PROFESORES PASO A PASO ---
function registrarProfesor() {
    console.log('\n--- 👨‍🏫 REGISTRO DE NUEVO PROFESOR ---');
    
    rl.question('Nombre del profesor: ', (firstName) => {
        rl.question('Apellido del profesor: ', (apellido) => {
            rl.question('ID de tipo de identificación: ', (identificationTypeId) => {
                rl.question('Número de identificación: ', (identificationNumber) => {
                    rl.question('Correo electrónico: ', async (email) => {
                        try {
                            const query = `
                                INSERT INTO Profesores 
                                (firstName, apellido, identificationTypeId, identificationNumber, email) 
                                VALUES (?, ?, ?, ?, ?)
                            `;
                            await pool.query(query, [firstName, apellido, identificationTypeId, identificationNumber, email]);
                            console.log('\n ¡Profesor registrado con éxito!');
                        } catch (err) {
                            console.log('\n Error al registrar profesor:', err.message);
                        }
                        mostrarMenuPrincipal();
                    });
                });
            });
        });
    });
}

// --- VER CURSOS ---
async function verCursos() {
    try {
        const [rows] = await pool.query('SELECT * FROM Cursos');
        console.log('\n --- LISTA DE CURSOS DISPONIBLES ---');
        if (rows.length === 0) {
            console.log('(No hay cursos registrados todavía)');
        } else {
            console.table(rows);
        }
    } catch (error) {
        console.error('\n Error al consultar cursos:', error.message);
    }
    mostrarMenuPrincipal();
}

// Iniciar la aplicación
mostrarMenuPrincipal();