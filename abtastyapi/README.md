# la14-api-intranet
Paquete encargado de resolver la logica de datos y de aplicación para la intranet.

## Pre-requisitos
Antes de poder ejecutar este paquete, debes contar con.
* [nvm](https://github.com/creationix/nvm).
* [yarn](https://yarnpkg.com/lang/en/).
## Ejecutando el paquete
Para poder ejecutar el paquete, debes seguir los siguientes pasos:
1. Revisar la documentación del repositorio y realizar lo que esta dice [aquí](https://github.com/imaginamos/la14).
2. En la raiz del este paquete ejecutar en terminal el comando `yarn dev`. 

## Comandos utiles en el paquete
Los siguientes comandos pueden ser de gran utilidad:
* `yarn lint` para revisar el codigo en el paquete.
* `yarn lint:fix` este hace lo mismo que el anterior, pero, corrige automaticamente los errores que pueden ser corregidos.
* `yarn migrate` ejecuta el archivo `server/migrate.js` con el objetivo de ejecutar los modelos y crearlos como tablas en la BD.

_Por favor mantener actualizado este archivo :D_