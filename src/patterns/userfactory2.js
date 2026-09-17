// src/patterns/UserFactory.js
class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }
}

class StudentUser extends User {
    constructor(code, firstName, lastName, identification_type_id, identification_number, phone, birthdate, email, address, city_id) {
        super(firstName, lastName, email);
        this.code = code;
        this.identification_type_id = identification_type_id;
        this.identification_number = identification_number;
        this.phone = phone;
        this.birthdate = birthdate;
        this.address = address;
        this.city_id = city_id;
    }
}

class TeacherUser extends User {
    constructor(code, firstName, lastName, identification_type_id, identification_number, email) {
        super(firstName, lastName, email);
        this.code = code;
        this.identification_type_id = identification_type_id;
        this.identification_number = identification_number;
    }
}

class UserFactory {
    static createUser(type, data) {
        switch (type.toLowerCase()) {
            case 'student':
            case 'estudiante':
                return new StudentUser(
                    data.code,
                    data.firstName,
                    data.lastName,
                    data.identification_type_id,
                    data.identification_number,
                    data.phone,
                    data.birthdate,
                    data.email,
                    data.address,
                    data.city_id
                );
            case 'teacher':
            case 'profesor':
                return new TeacherUser(
                    data.code,
                    data.firstName,
                    data.lastName,
                    data.identification_type_id,
                    data.identification_number,
                    data.email
                );
            default:
                throw new Error('Tipo de usuario no reconocido');
        }
    }
}

module.exports = UserFactory;