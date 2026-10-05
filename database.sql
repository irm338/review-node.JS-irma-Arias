
-- 1. Crear y usar la base de datos
CREATE DATABASE IF NOT EXISTS escuela_acme;
USE escuela_acme;

-- 2. Tabla Tipo de Identificación
CREATE TABLE Tipo_identificacion (
    identificacion INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(6) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    descripcion VARCHAR(250)
) ENGINE = InnoDB;

-- 3. Tabla Ciudades
CREATE TABLE Ciudades (
    identificacion BIGINT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(10) NOT NULL,
    nombre VARCHAR(100) NOT NULL
) ENGINE = InnoDB;

-- 4. Tabla Estudiantes
CREATE TABLE Estudiantes (
    identificacion BIGINT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(14) NOT NULL,
    firstName VARCHAR(60) NOT NULL,
    apellido VARCHAR(60) NOT NULL,
    identificationTypeId INT NOT NULL,
    numero_identificacion VARCHAR(16) NOT NULL,
    genero ENUM('M', 'F') NOT NULL,
    fecha_nacimiento DATETIME NOT NULL,
    correo_electronico VARCHAR(60) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    cityId BIGINT NOT NULL,
    
    CONSTRAINT fk_estudiante_tipo_id FOREIGN KEY (identificationTypeId) REFERENCES Tipo_identificacion(identificacion),
    CONSTRAINT fk_estudiante_ciudad FOREIGN KEY (cityId) REFERENCES Ciudades(identificacion)
) ENGINE = InnoDB;

-- 5. Tabla Profesores
CREATE TABLE Profesores (
    identificacion BIGINT PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(60) NOT NULL,
    apellido VARCHAR(60) NOT NULL,
    identificationTypeId INT NOT NULL,
    numero_identificacion VARCHAR(16) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    
    CONSTRAINT fk_profesor_tipo_id FOREIGN KEY (identificationTypeId) REFERENCES Tipo_identificacion(identificacion)
) ENGINE = InnoDB;

-- 6. Tabla Aulas (Corregido de "Mesa Aulas")
CREATE TABLE Aulas (
    identificacion INT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(10) NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    capacidad INT NOT NULL CHECK (capacidad > 0),
    activo BOOLEAN NOT NULL DEFAULT TRUE
) ENGINE = InnoDB;

-- 7. Tabla Cursos
CREATE TABLE Cursos (
    identificacion BIGINT PRIMARY KEY AUTO_INCREMENT,
    codigo VARCHAR(10) NOT NULL,
    descripcion VARCHAR(250),
    intensidad INT NOT NULL,
    peso INT NOT NULL,
    activo TINYINT NOT NULL DEFAULT 1
) ENGINE = InnoDB;

-- 8. Tabla Horarios de Cursos
CREATE TABLE Horarios_cursos (
    identificacion BIGINT PRIMARY KEY AUTO_INCREMENT,
    courseId BIGINT NOT NULL,
    teacherId BIGINT NOT NULL,
    classroomId INT NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    fecha_fin DATETIME NOT NULL,
    activo BOOLEAN NOT NULL DEFAULT TRUE,
    
    CONSTRAINT fk_horario_curso FOREIGN KEY (courseId) REFERENCES Cursos(identificacion),
    CONSTRAINT fk_horario_profesor FOREIGN KEY (teacherId) REFERENCES Profesores(identificacion),
    CONSTRAINT fk_horario_aula FOREIGN KEY (classroomId) REFERENCES Aulas(identificacion)
) ENGINE = InnoDB;

-- 9. Tabla Temas
CREATE TABLE Temas (
    identificacion BIGINT PRIMARY KEY AUTO_INCREMENT,
    courseId BIGINT NOT NULL,
    codigo VARCHAR(10) NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    activo TINYINT NOT NULL DEFAULT 1,
    
    CONSTRAINT fk_tema_curso FOREIGN KEY (courseId) REFERENCES Cursos(identificacion)
) ENGINE = InnoDB;

-- 10. Tabla Inscripciones
CREATE TABLE Inscripciones (
    identificacion BIGINT PRIMARY KEY AUTO_INCREMENT,
    courseScheduleId BIGINT,
    studentId BIGINT NOT NULL,
    fecha_registro DATETIME NOT NULL,
    activo TINYINT NOT NULL,
    
    CONSTRAINT fk_inscripcion_horario FOREIGN KEY (courseScheduleId) REFERENCES Horarios_cursos(identificacion),
    CONSTRAINT fk_inscripcion_estudiante FOREIGN KEY (studentId) REFERENCES Estudiantes(identificacion)
) ENGINE = InnoDB;

-- 11. Tabla Tarifas
CREATE TABLE Tarifas (
    identificacion BIGINT PRIMARY KEY AUTO_INCREMENT,
    inscriptionId BIGINT NOT NULL,
    tasa BIGINT NOT NULL,
    comentarios VARCHAR(250),
    
    CONSTRAINT fk_tarifa_inscripcion FOREIGN KEY (inscriptionId) REFERENCES Inscripciones(identificacion)
) ENGINE = InnoDB;

INSERT INTO Tipo_identificacion (nombre) VALUES ('Cédula'), ('Pasaporte');
INSERT INTO Ciudades (nombre) VALUES ('Guatemala');
INSERT INTO Tipo_identificacion (codigo, nombre) VALUES ('CC', 'Cédula'), ('PAS', 'Pasaporte');
INSERT INTO Ciudades (nombre) VALUES ('Guatemala');
