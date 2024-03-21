
<h1 align="center"> Proyecto final Ecommerce con Spring boot y Angular, Curso impartido por BEDU/HSBC </h1>
En este proyecto se implementaron herramientas como Spring Boot + Spring Security + JWT + MySql + Loggers + Junit5 + Lombok + MapStruct y como fronted fue angular 15 y un template llamado RafCart que es una plantilla ya hecha en angular para mas informacion les dejo la liga ** https://themeforest.net/category/site-templates/admin-templates?term=angular%20material ** hay gratuitos que son unos repositorios en github o de compra

## Acceso a la Base Datos 
* Para la base de datos aqui en el repositorio subo la bd y correr el query de la bd tal cual en el gestor si es mysqlworkbench mejor para que genere la base de datos.
* Recuerde crear su base de datos antes de ejecutar el proyecto y actualizar el nombre de la misma en el archivo **configuration.properties**. 
* El proyecto esta configurado para conectarse a una base de datos MYSQL pero puede cambiar en el **configuration.properties** las propiedades de conexión que se ajusten a su base de datos. 


## Tablas

Al ejecutar el proyecto por primera vez se crearan dos tablas en tu base de datos
* Rol - En esta tabla es necesario insertar los dos roles que se manejan: **ADMINISTRADOR, USUARIO_COMUN**, los nombres de usuarios los puede adaptar a sus necesidades.
* Usuario - En esta tabla el sistema guardara el nuevo usuario con una referencia al ROL al que pertenece el usuario. La entidad usuario implementa la interfaz UserDetails de spring security que le ayuda a saber como obtener la informacion del usuario por ejemplo el **username** y si el usuario esta activo o no. 

## Rutas Sin Proteccion
* Puede revisar en la clase **ConfiguracionSeguridad** las rutas permitidas como usuario anónimo. Las demas rutas es obligatorio enviar el token en la peticion y en dependencia del ROL permitido para el metodo podremos o no acceder al recurso. En este caso para nuestro proyecto en angular la ruta anonima para todos en el sistema es home, sign in y el join 
## EndPoint o URL

* POST http://localhost:8080/usuario/crear se usa para crear el usuario. Puede crear un usuario de cada tipo de rol para que pruebe el funcionamiento de la autorizacion.

**JSON ENTRADA**
```json
{
    "nombreUsuario": "administrador",
    "clave" : "123",
    "rol": "ADMINISTRADOR"
}
```

**JSON SALIDA**
```json
{
    "id": 1,
    "nombreUsuario": "administrador",
    "rol": "ADMINISTRADOR",
    "token": null
}
```

* POST http://localhost:8080/usuario/login se usa para hacer login y nos devolveró el jwt que usaremos para acceder a los recursos protegidos de nuestra aplicacion.

**JSON ENTRADA**
```json
{
    "nombreUsuario": "administrador",
    "clave" : "123"
}
```

**JSON SALIDA**
```json
{
    "id": 1,
    "nombreUsuario": "administrador",
    "rol": "ADMINISTRADOR",
    "token": "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbmlzdHJhZG9yIiwiZXhwIjoxNjc1NTcwOTkzfQ.TdjXBEVgSxsPvScrQwhs3Fuwj-bTo_KO3LYckXJ0Fsoi_rDfA9KHPf9w0wdFEA7a"
}
```
**Cada vez que se ejecute el método login se genera un token que tendrá una validez de 1h**
* Estos endpoints que les muestro ya estan implementados en nuestro proyecto de frontend en angular solo es para probar en login, registro desde postman o insomnia.

* GET http://localhost:8080/usuario/dell Podras acceder al endpoint que tengo manejando que es una computadora dell en BD obviamente cumpliendo el login para este recurso se permite el rol **ADMINISTRADOR, USUARIO_COMUN**.
* GET http://localhost:8080/usuario/dell/186  Podras acceder al endpoint que tengo manejando que es una computadora dell en BD obviamente cumpliendo el login para este recurso se permite el rol **ADMINISTRADOR, USUARIO_COMUN**.
* POST http://localhost:8080/usuario/dellCrear Podras crear una computadora igual manejado por estos dos roles **ADMINISTRADOR, USUARIO_COMUN** el json se construye asi Y te devuelve el json de entrada como salida.
**JSON ENTRADA**
```json
{
    "procesador":"intel i3",
     "memoriaRam":"12 GB",
     "disco":"2 TB"
}
```

* UPDATE http://localhost:8080/usuario/dellEditar este endpoint solo se puede accerder con el rol **ADMINISTRADOR** el es el que puede modificar algun producto.
* DELETE http://localhost:8080/usuario/dellBorrar este endpoint solo se puede accerder con el rol **ADMINISTRADOR** el es el que puede modificar algun producto.

* Observacion: Las rutas tienen nombres de los roles solo como demostración del ejercicio, el nombre de cada ruta dependerá de las necesidades de sus proyectos, las rutas ya estan implementadas en nuestro proyecto de angular ya con el token devuelto dependiendo del rol para asi poder acceder a ese recurso que necesitemos, al igual de que si estamos en rol usuario comun y queremos borrar un producto por ejemplo no esta permitido porque el backend tiene una validacion desde el controlador para saber que rol es el que se esta manejando, y bueno al igual del token que estemos manejando.

## Bono

No es una buena practica exponer en nuestros endpoint nuestras entidades. Es por eso que aqui les dejo tambien un pequeño ejemplo de como podemos
recibir y devolver DTO sin exponer nuestra entidad.

Para este ejemplo se uso **mapstruct** para convertir el **UsuarioDTO -> Usuario** y **Usuario -> UsuarioDTO**. Esto en cuanto al login pero igual en la entidad que manejo para hacer el crud igual estan implementados con DTOS.

* Les dejo la liga del deploy, **http://easymarket-env.eba-sjquhnum.us-west-1.elasticbeanstalk.com/** igual debemos de acceder al recursos haciendo los mismo pasos que aqui deberan de acceder a su base de datos remota y crear roles para poder interactuar con los endpoints por default manda un 401 porque es no autorizacion pero debe de crear los roles en la base de datos remota el nombre
de usuario es darwin y la contraseña es 12345678 el nombre de la instancia de conexion es esta awseb-e-p6hm9faanh-stack-awsebrdsdatabase-6cijtg7opwms.cpmlls1vsh5u.us-west-1.rds.amazonaws.com para esta ultima parte de la liga del despligue que hice en aws por temporalidad lo tuve que bajar debido a que me cobran al mes por tener el servicio arriba pero igual si quisieran que lo prenda sin problema saludos.

