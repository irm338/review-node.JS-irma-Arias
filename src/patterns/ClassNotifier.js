
// src/patterns/ClassNotifier.js
class SubjectSchedule {
    constructor() {
        this.observadores = [];
    }

    agregarObservador(observador) {
        this.observadores.push(observador);
    }

    eliminarObservador(observador) {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    notificarObservadores(mensaje) {
        this.observadores.forEach(observador => {
            observador.actualizar(mensaje);
        });
    }
}

class StudentObserver {
    constructor(nombre) {
        this.nombre = nombre;
    }

    actualizar(mensaje) {
        console.log(`🔔 [Notificación para ${this.nombre}]: ${mensaje}`);
    }
}

module.exports = { SubjectSchedule, StudentObserver };