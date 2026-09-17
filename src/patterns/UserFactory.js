
// src/patterns/UserFactory.js
class StudentUser {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        this.rol = 'Estudiante';
    }
}

class TeacherUser {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
        this.rol = 'Profesor';
    }
}

class UserFactory {
    static crearUsuario(tipo, nombre, email) {
        switch (tipo.toLowerCase()) {
            case 'estudiante':
                return new StudentUser(nombre, email);
            case 'profesor':
                return new TeacherUser(nombre, email);
            default:
                throw new Error('Tipo de usuario no reconocido');
        }
    }
}

module.exports = UserFactory;