#  Sistema de Gestión Académica - Escuela Acme

Aplicación interactiva de consola desarrollada en **Node.js** y **MySQL** para la gestión integral de una institución educativa. Este sistema implementa operaciones CRUD paso a paso mediante un menú interactivo en la terminal usando módulos nativos (`readline`) y conexión mediante promesas (`mysql2/promise`).

---

##  Tecnologías y Herramientas Utilizadas
* **Lenguaje:** JavaScript (Node.js)
* **Base de Datos:** MySQL (Motor InnoDB con claves foráneas e integridad referencial)
* **Librerías / Dependencias:**
  * `mysql2` (Conexión asíncrona y pool de conexiones)
  * `dotenv` (Gestión de variables de entorno)
  * `readline` (Interfaz interactiva por consola)

---

##  Estructura del Proyecto
```text
review-node.JS-irma-Arias/
│
├── .env                  # Variables de entorno (Credenciales de la BD)
├── database.sql          # Script DDL con la creación de tablas y relaciones
├── package.json          # Dependencias y configuración del proyecto
└── src/
    ├── config/
    │   └── db.js         # Configuración del pool de conexiones a MySQL
    ├── models/           # Modelos de datos de las entidades
    │   ├── city.js
    │   ├── classroom.js
    │   ├── Course.js
    │   ├── identificationType.js
    │   ├── student.js
    │   ├── Teacher.js
    │   └── ...
    └── test.js           # Menú interactivo principal y pruebas de consola (CRUD)



## Esquema de la Base de Datos (escuela_acme)
El sistema se compone de tablas relacionales optimizadas:

Tipos_identificacion: Catálogo de tipos de documentos.

Ciudades: Registro de ciudades disponibles.

Estudiantes: Información personal y académica de los alumnos.

Profesores: Datos del cuerpo docente.

Aulas: Control de espacios físicos y capacidades.

Cursos: Materias e intensidades horarias.

Horarios_cursos: Programación de clases vinculando cursos, profesores y aulas.

Temas: Contenidos temáticos por curso.

Inscripciones: Matrícula de estudiantes en los horarios de cursos.

Tarifas: Gestión de pagos y costos asociados a las inscripciones.


## configuración y Ejecución
npm install

## Configurar el archivo .env en la raíz con tus credenciales de MySQL:

DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=escuela_acme
DB_PORT=3306

## Ejecutar el menú interactivo en la terminal:

node src/test.js




