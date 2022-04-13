-- Creamos la base de datos Tarea1
Create Database Tarea1
go
-- Activar la base de datos
Use Tarea1
go
-- Crear la tabla Estudiante
Create table Estudiante
(codigo int NOT NULL,
apellidos VARCHAR(50) NOT NULL,
nombre VARCHAR(35) NOT NULL,
fechaNacimiento DATETIME NULL,
nuevo BIT NOT NULL,
monto decimal (6,2),
PRIMARY KEY(codigo)
);