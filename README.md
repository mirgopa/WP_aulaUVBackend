# Desarrollo del backend de una aplicación SOA
### Cátedra Capgemini – Universitat de València a la innovación en el desarrollo de Software
#### Ponente: Pablo Mir Gómez

<br/><br/>

## Índice
[1. Introducción al supuesto y objetivos](https://github.com/mirgopa/WP_aulaUVBackend#1-introducci%C3%B3n-al-supuesto-y-objetivos)<br/>
[1.1 Preparación de los entornos](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#11-preparaci%C3%B3n-de-los-entornos)<br/>
[1.2 Sinopsis de la Aplicación Web](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#12-sinopsis-de-la-aplicaci%C3%B3n-web)<br/>
[1.3 Objetivos](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#13-objetivos)<br/><br/>
[2. Presentación de la aplicación](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#2-presentaci%C3%B3n-de-la-aplicaci%C3%B3n)<br/>
[2.1 Mantenimiento de productos](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#21-mantenimiento-de-productos)<br/>
[2.2 Listado de compras](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#22-listado-de-compras)<br/><br/>
[3. Tutorial del supuesto](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#3-tutorial-del-supuesto)<br/>
[3.1 PASO 1: Modelo de datos](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#31-paso-1-modelo-de-datos)<br/>
[3.2 PASO 2: Configuraciones](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#32-paso-2-configuraciones)<br/>
[3.3 PASO 3: Construcción del backend](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#33-paso-3-construcci%C3%B3n-del-backend)<br/>
[3.3.1 Definición de Mapping HBT y DTO](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#331-definici%C3%B3n-de-mapping-hbt-y-dto)<br/>
[3.3.2 Generación de DAOs](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#332-generaci%C3%B3n-de-daos)<br/>
[3.3.3 Generación de SERVICEs](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/README.md#333-generaci%C3%B3n-de-services)

<br/><br/>

## 1. Introducción al supuesto y objetivos

Se dispone de una aplicación web SOA, basada en el siguiente software de carácter tecnológico:
*	Spring Boot (v2.1.1)
*	Spring Boot Data (v2.1.1)
*	Docker (v18.09.0): descargar
*	JDK (v1.8): descargar
*	Maven (v3.6.0): descargar
*	GIT (v2.19.0): descargar
*	Node (v8.12.0): descargar
*	NPM (v6.4.1)
*	Angular (v7)
<br/>
Como soporte a dicha tecnología, se hace uso del servidor de aplicaciones embebido en Spring Boot, un IDE de desarrollo STS (v3.9.0) y un MySQL Server (v8.0.13), que permite la publicación de contenidos, el desarrollo y el almacenamiento de la información respectivamente.

Para el presente supuesto y con objeto de facilitar la instalación de todos los componentes necesarios de la práctica, se dispone de un repositorio GitHub (https://github.com/mirgopa/WP_aulaUVBackend) donde encontrar:
*	Los diferentes workspaces (vista y backend).
*	Los ficheros “.gitignore” y “README.md”.
* Un comprimido con las aplicaciones necesarias para el desarrollo (JDK, Maven, MySQL y STS).
  * La carpeta mysql albergará tanto el Dockerfile para levantar un servidor de MySQL, como el conjunto de scripts para inicialización de la base de datos.
<br/>
La estructura del código está orientada a un modelo de Servicios, haciendo que sea posible el aislamiento y modularización de cada parte del desarrollo. Asimismo, tanto para vista como para negocio, se emplea una arquitectura MVC (Modelo-Vista-Controlador) bien diferenciada y permitiendo la centralización en negocio y en arquitectura, pero no en vista.

Se pretende seguir una metodología de desarrollo ordenada y coherente con la programación incremental. Para ello, se presentarán etapas, donde sobre cada una, se establecerá un hito bien definido (Modelo, DAO, Service y finalmente Controllers). La conjunción de hitos conllevará la consecución de la práctica.

<br/>

### 1.1 Preparación de los entornos

Los pasos a seguir para la correcta preparación de los entornos son:
*	Instalación de la herramienta Docker y GIT.
*	Descarga del repositorio GitHub:
```
C:> mkdir entornoDevelop
C:> cd entornoDevelop
C:\entornoDevelop> git init
C:\entornoDevelop> git remote add origin https://github.com/mirgopa/WP_aulaUVBackend.git
C:\entornoDevelop> git pull origin master
```
* Acceder a la carpeta "entornoZIP" y descomprimir el fichero "entornoDevelop.part01.rar". Alojar el contenido resultante en la raíz del repositorio. Tras ello, se puede borrar la carpeta "entornoZIP".
* Ejecutar el Dockerfile para inicializar la base de datos y comprobar su disponibilidad:
```
C:> cd entornoDevelop/apps/mysql
C:\entornoDevelop\apps\mysql> docker build -t mysql-webapp .
C:\entornoDevelop\apps\mysql> docker images
REPOSITORY           TAG                 IMAGE ID            CREATED             SIZE
mysql-webapp         latest              39e59ae5d159        6 minutes ago       276MB
mysql/mysql-server   latest              a02eab9e2434        2 months ago        276MB

C:\entornoDevelop\apps\mysql> docker run -d -p 3306:3306 --name=mysql-webapp mysql-webapp
C:\entornoDevelop\apps\mysql> docker exec -it mysql-webapp mysql -u root -p
```
*	Instalación de la herramienta Node y tras ello, del cliente de Angular:
```
C:\entornoDevelop> npm install -g @angular/cli
```

<br/>

### 1.2 Sinopsis de la Aplicación Web

Se presenta una aplicación para la gestión de listas de la compra. En ella, podemos encontrar dos opciones de menú:
* __Listado de la compra:__ Donde se presentarán las diferentes listas que configure el usuario y se le permitirá llevar a cabo su gestión integral.
*	__Mantenimiento de Productos:__ Donde se nos permitirá dar de alta productos e informar, si lo consideramos conveniente, su precio.
<br/>
Cada listado de la compra será capaz de informar al usuario del presupuesto total que consumiría en caso de escoger dicha lista.
Para el correcto funcionamiento de la aplicación, es necesario disponer de tres tablas (dos en caso de tratarse de un modelo conceptual). Sobre la siguiente imagen, se presenta el modelo de datos con la información necesaria para sostener el planteamiento presentado.

![Modelo de datos](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/entornoZIP/assets/Modelo%20f%C3%ADsico.PNG)

El aspecto de las pantallas se verá en más detalle sobre apartados posteriores.

<br/>

### 1.3 Objetivos

Lograr elaborar parte del Backend de un desarrollo SOA, similar al empleado en un modelo corporativo y empresarial, generando para ello las capas de negocio necesarias, gestionando Spring e Hibernate de manera cohesionada y haciendo uso de los contratos de E/S impuestos por la vista (puesto que se parte de un modelo con vista desarrollada).

Gracias al seguimiento paso a paso de la práctica, el alumno debe ser capaz de reconocer el flujo básico de la información en una metodología orientada a Servicios, así como las directivas necesarias para la consecución de un desarrollo MVC completo.

<br/>

## 2. Presentación de la aplicación

Tal como se ha detallado anteriormente, vamos a completar una herramienta para la gestión de una lista de la compra. Hoy en día, casi todas las aplicaciones web poseen parte móvil y parte web, pero en este caso únicamente nos centraremos en el backend, puesto que seguiremos el concepto de centralización de negocio (backend único, sea cual sea el número de fronts).
En cualquier caso, el objetivo del tutorial no se centra en la elaboración de interfaces, por lo que se proporcionan de antemano para evitar desviar el objetivo de la guía.

<br/>

__Vamos al supuesto:__
La empresa "A" quiere facilitar la existencia a sus clientes, aportándoles una herramienta web donde definan de antemano los productos que van a comprar en su visita al supermercado. El objetivo es que el cliente disponga de todos los productos de la tienda desde su casa y posteriormente, acuda al centro con la lista en su móvil, sabiendo de antemano lo que se va a gastar.
Esta herramienta está en fase piloto, por lo que únicamente se proporcionará en formato web y en base a la aceptación pública, se desarrollará la plataforma móvil.

La empresa "I" desarrollará la capa de vista y facilitará a nuestra empresa los contratos necesarios para garantizar la correcta comunicación entre ambos y, por consiguiente, el éxito del desarrollo.

Como desarrolladores del backend de la aplicación, debemos completar el desarrollo del "Listado de Compras", habiendo realizado ya previamente, los mantenimientos de productos necesarios.

<br/>

### 2.1 Mantenimiento de productos

Se permitirá la gestión integral de productos de una posible lista de la compra, especificando para ello "Nombre", "Descripción", "Imagen", "ReadMore" y "Precio" del mismo.

La información quedará reflejada sobre un listado de cards, con la posibilidad de emplear filtros (sobre el campo Nombre) y realizar operaciones de mantenimiento (alta, edición y borrado).
Sobre cada entidad de producto (card) se podrá llevar a cabo las siguientes acciones:
*	_Edición de producto._
*	_Borrado de producto._
* _Enlace con más información del producto._
<br/>

A nivel global, se permitirá llevar a cabo la acción de _Alta de nuevos productos_.

<br/>

> NOTA: Todos los borrados son de carácter físico (no existen históricos).

<br/>

![Mantenimiento de productos](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/entornoZIP/assets/Mantenimiento%20de%20productos.PNG)
<br/><br/>
![Mantenimiento de productos - Edit](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/entornoZIP/assets/Mantenimiento%20de%20productos%20-%20Edit.PNG)

<br/>

### 2.2 Listado de compras

Se permitirá la gestión integral de compras, especificando para ello el "Nombre" y el conjunto de "Productos" incluidos sobre el listado.

La información básica de cada listado quedará reflejada sobre un grid de cards, con la posibilidad de emplear filtros sobre el mismo (sobre el campo Nombre) y realizar operaciones de mantenimiento (alta, edición y borrado).
Sobre cada entidad de compra (card) se podrá llevar a cabo las siguientes acciones:
*	_Edición de lista de la compra._
*	_Borrado de lista de la compra._
<br/>

A nivel global, se permitirá llevar a cabo la acción de _Alta de nuevas listas de la compra_.

<br/>

![Mantenimiento de compras](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/entornoZIP/assets/Mantenimiento%20de%20compra.PNG)
<br/><br/>
![Mantenimiento de compras - Edit](https://github.com/mirgopa/WP_aulaUVBackend/blob/master/entornoZIP/assets/Mantenimiento%20de%20compra%20-%20Edit.PNG)

<br/>

## 3. Tutorial del supuesto

### 3.1 PASO 1: Modelo de datos

Se parte de un modelo de datos propuesto (ver conceptual presentado anteriormente) y ya ejecutado en base de datos, mediante el arranque de un contenedor Docker construido a partir de un Dockerfile.

Es posible visualizar la definición completa de las tablas existentes sobre los siguientes cuadros:

<table>
	<tr>
  <th><b>PRODUCTO</b></th>
		<th colspan="2"><i>Esta entidad representa un producto presente en cualquier lista de la compra.</i></th>
	</tr>
	<tr><th>NOMBRE</th><th>TIPO</th><th>OBLIGATORIO</th></tr>
	<tr><td>ID (PK)</td><td>BIGINT(16)</td><td>S</td></tr>
	<tr><td>NOMBRE</td><td>VARCHAR(60)</td><td>S</td></tr>
	<tr><td>DESCRIPCION</td><td>VARCHAR(250)</td><td>S</td></tr>
	<tr><td>IMAGE</td><td>VARCHAR(500)</td><td>N</td></tr>
	<tr><td>READMORE</td><td>VARCHAR(500)</td><td>N</td></tr>
	<tr><td>PRECIO</td><td>DECIMAL(6, 3)</td><td>N</td></tr>
</table>
<br/>
<table>
	<tr>
  <th><b>COMPRA</b></th>
		<th colspan="2"><i>Esta entidad representa un listado de la compra con productos.</i></th>
	</tr>
	<tr><th>NOMBRE</th><th>TIPO</th><th>OBLIGATORIO</th></tr>
	<tr><td>ID (PK)</td><td>BIGINT(16)</td><td>S</td></tr>
	<tr><td>NOMBRE</td><td>VARCHAR(60)</td><td>S</td></tr>
	<tr><td>CREATED</td><td>TIMESTAMP</td><td>N</td></tr>
</table>
<br/>
<table>
	<tr>
  <th><b>COMPRA_PRODUCTO</b></th>
		<th colspan="2"><i>ManyToMany encargada de manifestar la conjunción entre productos y listas de la compra.</i></th>
	</tr>
	<tr><th>NOMBRE</th><th>TIPO</th><th>OBLIGATORIO</th></tr>
	<tr><td>COMPRA_ID (PK)</td><td>BIGINT(16)</td><td>S</td></tr>
	<tr><td>PRODUCTO_ID (PK)</td><td>BIGINT(16)</td><td>S</td></tr>
</table>

<br/>

### 3.2 PASO 2: Configuraciones

A continuación, se realiza un breve repaso de todas aquellas clases y configuraciones presentes en la aplicación Spring Boot y esenciales para el correcto funcionamiento del entorno:
* Template de CRUD básico para Hibernate: _AbstractJpaDao.java y JpaDao.java_
  * Pese a la utilización de Spring Boot Data para agilizar el desarrollo, tenemos muy pocas posibilidades para personalizar queries, hacer transformaciones a DTOs, etc. Esta tecnología ofrece muy poca flexibilidad en el momento en que las consultas se complican y van más allá de un listado sin joins o filtros.
*	Configuración del mapeo de entidades (POJO -> DTO): _BeanUtils.java, DTOTransformer.java y dozer-mapping.xml_
*	Configuración de la aplicación: _Config.java_
*	Propiedades de la capa de persistencia: _application.properties_
<br/>

### 3.3 PASO 3: Construcción del backend
Se procederá a la construcción del backend completo que dará respuesta a los servicios presentados a continuación:
*	Servicio de búsqueda general de compras, empleada para definir el contenido del listado y para la que se debe permitir el filtrado mediante el campo: "nombre". _Revisar contrato 1._
*	Servicio de consulta de información para una compra concreta (incluyendo los productos asociados a la misma). _Revisar contrato 2._
*	Servicio de inserción/actualización de información de una compra (incluyendo los productos asociados a la misma). _Revisar contrato 3._
*	Servicio de eliminación de una compra (incluyendo las asociaciones entre la propia compra y los productos incluidos en la misma). _Revisar contrato 4._
<br/>

Cada parte seguirá una misma metodología de desarrollo, no obstante, todas ellas darán comienzo en la definición de un POJO y su DTO asociado.

<br/>

#### 3.3.1 Definición de Mapping HBT y DTO

En este punto definiremos un POJO (Plain Old Java Object) que cubrirá la función de mapear la tabla existente en base de datos para su representación como objeto de Java.

Hibernate se nutrirá de las anotaciones incorporadas a la clase, atributos o métodos, para enlazar los contenidos y evitar así la utilización de código SQL puro sobre negocio. De este modo, abstraeremos el SGBD de nuestro desarrollo, permitiendo así minimizar impactos ante un cambio de base de datos (pj. De MySQL a Oracle).

Dicha abstracción viene motivada principalmente por la utilización de un nuevo lenguaje de consultas: HQL (Hibernate Query Language), sin cláusulas especiales y no dependiente de plataformas.

Un POJO anotado por Hibernate puede tener menos campos que su correspondiente tabla en Base de Datos (esto no dará problemas en caso de campos excluidos en los que se permita NULL), o más campos, siempre y cuando no tengan anotación referente a Base de Datos.
En lo que respecta al DTO vinculado con un POJO, al menos nos encontraremos, los mismos campos en ambos objetos (pueden haber menos en caso que queramos filtrar información al usuario, o más en caso que queramos generar más información de la que nos llega desde base de datos – pj. Presupuesto de la compra).

<br/>

#### 3.3.2 Generación de DAOs

Para lograr la interacción con base de datos construiremos una clase Java DAO (Data Access Object) encargada de consumir el DTO relleno desde vista y devolver el POJO obtenido desde Base de Datos. En este punto, se definirán por tanto las consultas necesarias en HQL para la obtención de la información requerida.

Dispondremos de una interfaz con métodos públicos (a la que se accederá en el service) y su consiguiente implementación.

Idílicamente, construiremos un método por servicio a definir, no obstante, es posible generar métodos privados en la implementación para aligerar el código de determinadas funciones y atomizar algunas acciones.

<br/>

#### 3.3.3 Generación de SERVICEs
