-- PASO 1: COMPROBAMOS SI EXISTE LA BASE DE DATOS, SI ES ASI LA BORRAMOS
-- PARA CREARLA DE NUEVO
USE master
go
if Exists (select * from sysdatabases where name = 'VentasTest')
   DROP DATABASE VentasTest
GO
--PASO 2 :
--CREAMOS LA BASE DE DATOS VENTASTEST
-- (Verificar que la ruta de creacion exista y que se tenga permisos sobre ella)
-- NOTA: La ruta C:\Aleon\Bdatos\ en el script es de ejemplo. Puedes redefinir tu propia ruta 
CREATE DATABASE VentasTest
ON 
   PRIMARY (NAME = VentasTest,
   FILENAME = 'D:\github-repositories\cursos-I\Base de Datos Avanzada\Materiales01_Introduccion\Laboratorios\VentasTest.MDF',
   SIZE = 4,
   FILEGROWTH = 15%)
   LOG ON (NAME = VentasTest_log,
   FILENAME = 'D:\github-repositories\cursos-I\Base de Datos Avanzada\Materiales01_Introduccion\Laboratorios\VentasTest.LDF',
   SIZE = 2,
   FILEGROWTH = 15%)
GO

--PASO 3 :
--CREAMOS LAS TABLAS EN VENTASTEST (Segun el caso Santa Ursula)

USE [VentasTest]
GO
if(object_id('Tb_Abastecimiento','U')) is not null
	drop table Tb_Abastecimiento 
go
CREATE TABLE [dbo].[Tb_Abastecimiento]
(
	[Cod_prv] [nchar](4) NOT NULL,
	[Cod_pro] [nchar](4) NOT NULL,
	[Pre_Aba] [money] NOT NULL,
	[Credito] [nchar] (1)  NULL,
 PRIMARY KEY ( [Cod_prv] ASC,[Cod_pro] ASC)
)

GO
if(object_id('Tb_Categoria','U')) is not null
	drop table Tb_Categoria 
go
CREATE TABLE [dbo].[Tb_Categoria]
(
	[Id_Cat] [int] IDENTITY(1,1) NOT NULL,
	[Des_Cat] [varchar](50) NULL,
	[Foto_Cat] [image] NULL,
    PRIMARY KEY  
	(
		[Id_Cat] ASC
	)
)
GO

if(object_id('Tb_Cliente','U')) is not null
	drop table Tb_Cliente 
go
CREATE TABLE [dbo].[Tb_Cliente]
(
	[Cod_cli] [nvarchar](4) NOT NULL,
	[Raz_soc_cli] [nvarchar](100) NOT NULL,
	[Dir_cli] [nvarchar](50) NULL,
	[Tel_cli] [nvarchar](10) NULL,
	[Ruc_cli] [nchar](11) NOT NULL,
	[Id_Ubigeo] [nchar](6) NULL,
	[Tip_cli] [int]  NULL,
	[Contacto] [nvarchar](30) NULL,
	[Fec_reg] [datetime] NOT NULL,
	[Usu_Registro] [varchar](20) NULL,
	[Fec_Ult_Mod] [datetime] NULL,
	[Usu_Ult_Mod] [varchar](20) NULL,
	[Est_cli] [int] NULL,
    PRIMARY KEY 
	(
		[Cod_cli] ASC
	)
)
GO

if(object_id('Tb_Detalle_Compra','U')) is not null
	drop table Tb_Detalle_Compra 
go
CREATE TABLE [dbo].[Tb_Detalle_Compra]
(
	[Num_oco] [nvarchar](6) NOT NULL,
	[Cod_pro] [nchar](4) NOT NULL,
	[Can_ped] [int] NULL,
  PRIMARY KEY 
	(
		[Num_oco] ASC,
		[Cod_pro] ASC
	)
) 
GO

if(object_id('Tb_Detalle_Factura','U')) is not null
	drop table Tb_Detalle_Factura 
go
CREATE TABLE [dbo].[Tb_Detalle_Factura]
(
	[Num_fac] [nvarchar](6) NOT NULL,
	[Cod_pro] [nchar](4) NOT NULL,
	[Can_ven] [int] NOT NULL,
	[Pre_ven] [real] NOT NULL,
  PRIMARY KEY 
	(
		[Num_fac] ASC,
		[Cod_pro] ASC
	)
) 
GO

if(object_id('Tb_Factura','U')) is not null
	drop table Tb_Factura 
go
CREATE TABLE [dbo].[Tb_Factura]
(
	[Num_fac] [nvarchar](6) NOT NULL,
	[Fec_fac] [datetime] NOT NULL,
	[Cod_cli] [nvarchar](4) NOT NULL,
	[Fec_can] [datetime] NULL,
	[Est_fac] [nvarchar](50) NOT NULL,
	[Cod_ven] [nchar](3) NOT NULL,
	[Por_Igv] [money] NOT NULL,
	[Fec_Registro] [datetime] NULL,
	[Usu_Registro] [varchar](20) NULL,
	[Fec_Ult_Mod] [datetime] NULL,
	[Usu_Ult_Mod] [varchar](20) NULL,
  PRIMARY KEY 
	(
		[Num_fac] ASC
	)
)
GO

if(object_id('Tb_Orden_Compra','U')) is not null
	drop table Tb_Orden_Compra 
go
CREATE TABLE [dbo].[Tb_Orden_Compra]
(
	[Num_oco] [nvarchar](6) NOT NULL,
	[Fec_oco] [datetime] NOT NULL,
	[Cod_prv] [nchar](4) NOT NULL,
	[Fec_ate] [datetime] NULL,
	[Est_oco] [int] NOT NULL,
	[Fec_Registro] [datetime] NULL,
	[Usu_Registro] [varchar](20) NULL,
	[Fec_Ult_Mod] [datetime] NULL,
	[Usu_Ult_Mod] [varchar](20) NULL,
 PRIMARY KEY 
	(
		[Num_oco] ASC
	)
) 
GO

if(object_id('Tb_Producto','U')) is not null
	drop table Tb_Producto 
go
CREATE TABLE [dbo].[Tb_Producto]
(
	[Cod_pro] [nchar](4) NOT NULL,
	[Des_pro] [nvarchar](50) NULL,
	[Pre_pro] [money] NULL,
	[Stk_act] [int] NULL,
	[Stk_min] [int] NULL,
	[Id_UM] [int] NULL,
	[Id_Cat] [int] NULL,
	[Importado] [int] NULL,
	[Fec_Registro] [datetime] NULL,
	[Usu_Registro] [nvarchar](20) NULL,
	[Fec_Ult_Mod] [datetime] NULL,
	[Usu_Ult_Mod] [nvarchar](20) NULL,
	[Est_pro] [int] NULL,
 PRIMARY KEY 
	(
		[Cod_pro] ASC
	)
) 
GO

if(object_id('Tb_Proveedor','U')) is not null
	drop table Tb_Proveedor 
go
CREATE TABLE [dbo].[Tb_Proveedor]
(
	[Cod_prv] [nchar](4) NOT NULL,
	[Raz_soc_prv] [nvarchar](50) NOT NULL,
	[Dir_prv] [nvarchar](50) NULL,
	[Tel_prv] [nvarchar](10) NULL,
	[Ruc_Prv] [nchar](11) NOT NULL,
	[Rep_ven] [nvarchar](30) NULL,
	[Id_Ubigeo] [nchar](6) NULL,
	[Fec_Registro] [datetime] NULL,
	[Usu_Registro] [varchar](20) NULL,
	[Fec_Ult_Mod] [datetime] NULL,
	[Usu_Ult_Mod] [varchar](20) NULL,
	[Est_prv] [int] NULL,
  PRIMARY KEY 
	(
		[Cod_prv] ASC
	)
)
GO

if(object_id('Tb_RepositorioDocumentos','U')) is not null
	drop table Tb_RepositorioDocumentos 
go
CREATE TABLE [dbo].[Tb_RepositorioDocumentos]
(
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Ruta] [varchar](100) NULL,
	[FecRegistro] [smalldatetime] NULL,
	[UsuRegistro] [varchar](20) NULL,
  PRIMARY KEY 
	(
		[Id] ASC
	)
)
GO

if(object_id('Tb_Ubigeo','U')) is not null
	drop table Tb_Ubigeo 
go
CREATE TABLE [dbo].[Tb_Ubigeo]
(
	[Id_Ubigeo] [nchar](6) NOT NULL,
	[IdDepa] [nvarchar](255) NULL,
	[IdProv] [nvarchar](255) NULL,
	[IdDist] [nvarchar](255) NULL,
	[Departamento] [nvarchar](255) NULL,
	[Provincia] [nvarchar](255) NULL,
	[Distrito] [nvarchar](255) NULL,
	[Cod_Ven] [nchar](3) NULL,
  PRIMARY KEY 
	(
		[Id_Ubigeo] ASC
	)
)
GO

if(object_id('Tb_UnidadMedida','U')) is not null
	drop table Tb_UnidadMedida 
go
CREATE TABLE [dbo].[Tb_UnidadMedida]
(
	[Id_UM] [int] IDENTITY(1,1) NOT NULL,
	[Des_UM] [varchar](50) NULL,
  PRIMARY KEY 
	(
		[Id_UM] ASC
	)
)
GO

if(object_id('Tb_Usuario','U')) is not null
	drop table Tb_Usuario 
go
CREATE TABLE [dbo].[Tb_Usuario]
(
	[Login_Usuario] [varchar](20) NOT NULL,
	[Pass_Usuario] [varchar](20) NULL,
	[Niv_Usuario] [int] NULL,
	[Est_Usuario] [int] NULL,
	[Fec_Registro] [datetime] NULL,
	[Usu_Registro] [varchar](20) NULL,
	PRIMARY KEY CLUSTERED 
	(
		[Login_Usuario] ASC
	)
	
) 
GO

if(object_id('Tb_Vendedor','U')) is not null
	drop table Tb_Vendedor 
go
CREATE TABLE [dbo].[Tb_Vendedor]
(
	[Cod_ven] [nchar](3) NOT NULL,
	[Nom_ven] [nvarchar](25) NULL,
	[Ape_ven] [nvarchar](25) NULL,
	[Sue_ven] [money] NULL,
	[Fec_ing] [datetime] NULL,
	[Tip_ven] [int] NULL,
	[Dni_ven] [nchar](8) NULL,
	[Email_ven] [varchar](50) NULL,
	[Cod_Supervisor] [nchar](3) NULL,
	[Fec_Registro] [datetime] NULL,
	[Usu_Registro] [varchar](20) NULL,
	[Fec_Ult_Mod] [datetime] NULL,
	[Usu_Ult_Mod] [varchar](20) NULL,
	[Est_ven] [int] NULL,
    PRIMARY KEY  
	(
		[Cod_ven] ASC
	)
)
GO

-- PASO 4 : DEFINICION DE LA INTEGRIDAD REFERENCIAL - LLAVES FORANEAS (FK)

Alter table Tb_Ubigeo add  foreign key(Cod_Ven) references Tb_Vendedor (Cod_Ven) 
go
Alter table Tb_Cliente add  foreign key(Id_Ubigeo) references Tb_Ubigeo (Id_Ubigeo) 
go
Alter table Tb_Proveedor add  foreign key(Id_Ubigeo) references Tb_Ubigeo (Id_Ubigeo) 
go

Alter table Tb_Vendedor add  foreign key(Cod_Supervisor) references Tb_Vendedor (Cod_ven) 
go

Alter table Tb_Factura 
    add  foreign key(Cod_Cli) references Tb_Cliente (Cod_Cli) 
go

Alter table Tb_Factura add  foreign key(Cod_Ven) references Tb_Vendedor (Cod_Ven)
go
Alter table Tb_Detalle_Factura add  foreign key(Cod_Pro) references Tb_Producto (Cod_Pro) 
go
Alter table Tb_Detalle_Factura add  foreign key(Num_Fac) references Tb_Factura (Num_Fac) 
go
Alter table Tb_Orden_Compra add  foreign key(Cod_Prv) references Tb_Proveedor (Cod_Prv) 
go
Alter table Tb_Detalle_Compra add  foreign key(Num_Oco) references Tb_Orden_Compra (Num_Oco) 
go
Alter table Tb_Detalle_Compra add  foreign key(Cod_Pro) references Tb_Producto (Cod_Pro)  
go

Alter table Tb_Abastecimiento add  foreign key(Cod_Pro) references Tb_Producto (Cod_Pro)
go
Alter table Tb_Abastecimiento add  foreign key(Cod_Prv) references Tb_Proveedor (Cod_Prv) 
go

Alter table Tb_Producto add  foreign key(Id_UM) references Tb_UnidadMedida (Id_UM)
go
Alter table Tb_Producto add  foreign key(Id_Cat) references Tb_Categoria (Id_Cat) 
go

Alter table Tb_RepositorioDocumentos add  foreign key(UsuRegistro) references Tb_Usuario (Login_Usuario) 
go