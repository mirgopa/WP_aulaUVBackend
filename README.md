# Desarrollo del backend de una aplicación SOA
### Cátedra Capgemini – Universitat de València a la innovación en el desarrollo de Software
#### Ponente: Pablo Mir Gómez

<br/><br/>

## Índice
1. Introducción al supuesto y objetivos<br/>
1.1 Preparación de los entornos

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

Como soporte a dicha tecnología, se hace uso del servidor de aplicaciones embebido en Spring Boot, un IDE de desarrollo STS (v3.9.0) y un MySQL Server (v8.0.13), que permite la publicación de contenidos, el desarrollo y el almacenamiento de la información respectivamente.

Para el presente supuesto y con objeto de facilitar la instalación de todos los componentes necesarios de la práctica, se dispone de un repositorio GitHub (https://github.com/mirgopa/WP_aulaUVBackend) donde encontrar:
*	Los diferentes workspaces (vista y backend).
*	Los ficheros “.gitignore” y “README.md”.
* Un comprimido con las aplicaciones necesarias para el desarrollo (JDK, Maven, MySQL y STS).
  * La carpeta mysql albergará tanto el Dockerfile para levantar un servidor de MySQL, como el conjunto de scripts para inicialización de la base de datos.

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
