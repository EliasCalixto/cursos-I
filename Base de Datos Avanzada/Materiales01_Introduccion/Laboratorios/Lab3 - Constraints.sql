/*
Sesion 01 - Laboratorio 3 
TEMA: CREACION DE CONSTRAINTS TIPO CHECK, DEFAULT Y UNIQUE
INSTRUCTOR : JOSE LEON CABEL
REQUISITO: PARA REALIZAR ESTE LABORATORIO DEBE HABER EJECUTADO EL SCRIPT : Lab2-Script_BDVentasTest.sql */

/* Validando campos en SQL: 
A continuacion crearemos una serie de constraints en la BD VentasTest
tanto de de chequeo para validacion de reglas (tipo Check),
de valores por defecto (tipo Default) asi como de unicidad (tipo Unique)*/

Use VentasTest
go

--PARTE 1 : CONSTRAINTS DE CHEQUEO (VERIFICACION)
--SINTAXIS DE LOS CONSTRAINT TIPO CHECK
--ALTER TABLE <NOMBRE DE TABLA>
--     ADD CONSTRAINT <NOMBRE CONSTRAINT> CHECK
--	      (<REGLA DE VALIDACION>)

-- 1. Que el campo Tip_Ven de la tabla Tb_Vendedor solo almacene los valores '1' o '2'


-- 2. Que el campo Est_Fac de la tabla Tb_Factura solo permita
-- los valores 1 (Pendiente), 2(Cancelada o Pagada) o 3 (Anulada)


-- 3. Que el campo Est_Oco de la tabla Tb_Orden_Compra solo permita
--los valores 1(Pendiente), 2(Atendida) o 3 (Rechazada)


-- 4. Que el campo Sue_Ven de la tabla Tb_Vendedor
-- solo permita valores entre 950 y 5000 
-- de la data actual en la tabla


--5. Validando que el RUC del cliente (en la tabla Tb_Cliente) para que sean 11 digitos



--6. Validando que el RUC del proveedor (en la tabla Tb_Proveedor) para que sean 11 digitos


--7. Validando que el DNI del vendedor (en la tabla Tb_Vendedor) para que sean 8 digitos

--8. Eliminaremos el contraint de restriccion de sueldos del vendedor (caso 4)

--PARTE 2 : CONSTRAINTS DE TIPO DEFAULT (VALORES POR DEFECTO)
--SINTAXIS DE LOS CONSTRAINT TIPO DEFAULT
--ALTER TABLE <NOMBRE DE TABLA>
 --   ADD CONSTRAINT <NOMBRE DE DEFAULT> DEFAULT 
 --  <VALOR POR DEFECTO> FOR <NOMBRE DE CAMPO>
 
-- 9. Para el caso de no ingresar el campo fec_reg de la tabla Tb_Cliente
-- asuma para este campo por defecto el valor de la fecha actual 
 
 

-- 10. Para el caso de no ingresar el campo Est_prv de la tabla Tb_Proveedor
-- asuma para este campo por defecto el valor de la fecha actual 
 
 

--PARTE 3 : CONSTRAINTS DE UNICIDAD (APLICABLES A CAMPOS NOT NULL QUE DEBEN 
--ALMACENAR SOLO VALORES UNICOS Y QUE NO SEAN LLAVE PRIMARIA)
--SINTAXIS DE LOS CONSTRAINT DE UNICIDAD
--ALTER TABLE <NOMBRE DE TABLA>
 --   ADD CONSTRAINT <NOMBRE DE CONTRAINT> UNIQUE <NOMBRE DE CAMPO>
 
 -- 11. En la tabla Tb_Vendedor crear un Constraint de Unicidad 
  -- para el DNI del vendedor.


 -- 12. En la tabla Tb_Proveedor crear un Constraint de Unicidad 
 -- para el RUC del proveedor.


 -- 13. En la tabla Tb_Cliente crear un Constraint de Unicidad 
 -- para el RUC del cliente.

