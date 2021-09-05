## Description
Api de videos realizada con el framework [Nest](https://github.com/nestjs/nest).

# Requerimientos

- Nodejs v-12.8.0
- Docker v-20.10.7
- Docker Compose v-1.29.2
#
# Instalacion
## Modificar las variables de entorno
```bash
$ cp .env.example .env
```
## Instalar dependencias del proyecto

```bash
$ cd app_videos

$ npm install
```

## Creacion de contenedor Docker

```bash
$ docker-compose up -d
```

## Ejecutando la aplicación

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
#
## Documentacion
Para acceder a la documentacion luego de ejecutar la aplicacion dirigirce a la ruta '/api'
#
## Autor

- Eduardo Saes
