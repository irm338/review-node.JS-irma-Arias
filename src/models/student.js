import pool from '../config/db.js';

class Student {
    constructor(codigo, firstName, apellido, identificationTypeId, identificationNumber, genero, birthDate, email, address, cityId) {
        this.codigo = codigo;
        this.firstName = firstName;
        this.apellido = apellido;
        this.identificationTypeId = identificationTypeId;
        this.identificationNumber = identificationNumber;
        this.genero = genero;
        this.birthDate = birthDate;
        this.email = email;
        this.address = address;
        this.cityId = cityId;
    }

    // Método para guardar un estudiante nuevo en la base de datos
    async save() {
        try {
            const query = `
                INSERT INTO Estudiantes (código, firstName, apellido, identificationTypeId, Número de identificación, género, Fecha de nacimiento, correo electrónico, DIRECCIÓN, cityId) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const values = [
                this.codigo, 
                this.firstName, 
                this.apellido, 
                this.identificationTypeId, 
                this.identificationNumber, 
                this.genero, 
                this.birthDate, 
                this.email, 
                this.address, 
                this.cityId
            ];

            const [resultado] = await pool.execute(query, values);
            return resultado;
        } catch (error) {
            console.error("Error al guardar el estudiante:", error);
            throw error;
        }
    }

    // Método sencillo para ver todos los estudiantes
    static async getAll() {
        try {
            const [filas] = await pool.query("SELECT * FROM Estudiantes");
            return filas;
        } catch (error) {
            console.error("Error al obtener los estudiantes:", error);
            throw error;
        }
    }
}

export default Student;