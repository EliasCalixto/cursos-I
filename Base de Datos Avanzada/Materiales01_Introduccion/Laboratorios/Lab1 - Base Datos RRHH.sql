USE master
go
CREATE DATABASE RecursosHumanos
go
USE RecursosHumanos
go

CREATE TABLE Departamento (
	codDepartamento INT IDENTITY (1,1) NOT NULL PRIMARY KEY,
	nomDepartamento NVARCHAR(35) NOT NULL )
GO
CREATE TABLE Empleado (
	codEmpleado		INT IDENTITY (1,1) NOT NULL PRIMARY KEY,
	nomEmpleado		NVARCHAR(50) NOT NULL,
	apeEmpleado		NVARCHAR(50) NOT NULL,
	fecNacEmpleado DATETIME NULL,
	fecIngEmpleado	DATETIME NULL,
	NroPolizaEmpleado 	NVARCHAR(10),
	codDepartamento INT  NOT NULL )
GO
-- Hacemos algunas modificaciones a la tabla Empleado
-- Agregaremos los campos DNI  Sueldo y email, pues los agregamos con ALTER TABLE
  ALTER TABLE EMPLEADO
        ADD DNIEmpleado NCHAR(8) not null , 
		   emailEmpleado NVARCHAR(30), 
		   sueEmpleado Money
  GO

  -- Removeremos el campo NroPoliza (dado que en nuestro ejemplo no hace falta en la tabla) 
  ALTER TABLE EMPLEADO
         DROP COLUMN NroPolizaEmpleado 
  GO
   
  -- Otros casos que se pueden dar, por ejemplo cambiar el tamaño de un campo
  -- El nombre de sucursal de 35 caracteres a 50 caracteres.
  ALTER TABLE DEPARTAMENTO
      ALTER COLUMN nomDepartamento VARCHAR(50)
  GO
  

-- Agregamos 3 departamentos (Inserts clasicos, uno por registro)

INSERT INTO Departamento 
          VALUES (  'Gerencia General')
INSERT INTO Departamento 
          VALUES (  'Finanzas')
INSERT INTO Departamento 
          VALUES (  'Sistemas')
GO

SELECT * FROM Departamento;

--  Definamos la FK en la tabla Empleado apuntando a la tabla Departamento
--  en base al campo codDepartamento 


-- Definamos los siguentes constraint

-- 1. El sueldo del empleado debe estar en un rango de 950 a 4500 soles.

-- 2. El DNI del empleado debe ser de 8 digitos.

-- 3. En el caso de que al momento de insertar un empleado se omita la fecha de ingreso, se asuma por defecto 
-- que la fecha de ingreso sea la fecha actual


-- 4. El campo DNIEmpleado de la tabla Empleado debe ser unico.


--Agregamos 4 empleados y validamos los constraints 
-- Se emplea un Insert para los 3 registros 

INSERT INTO EMPLEADO 
	VALUES ( 'Jose', 'Leon','19660226','20150320',1,'08863451','pjleon@yahoo.com',2900),
	       ( 'Carmen', 'Montoya','19660323','20180523',1,'08863422','cmontoya@gmail.com',3000),
	       ( 'Eduardo', 'Cruzado','19800726',NULL,1,'02363455','ecruzado@live.com',5000)
go

