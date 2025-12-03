
# Taller: API REST con Node.js y Express

Este repositorio contiene el proyecto desarrollado para el taller de "API REST con Node.js y Express". El objetivo es validar la aplicación de conceptos clave como rutas, middlewares y estructura REST.

## 📋 Requisitos Previos
* Tener instalado **Node.js**.

## 🚀 Instrucciones de Instalación
1.  Clonar este repositorio.
2.  Abrir la terminal en la carpeta del proyecto.
3.  Instalar todas las dependencias necesarias ejecutando:
    ```bash
    npm install
    ```

## 🛠️ Cómo Ejecutar el Proyecto
Para iniciar el servidor, ejecuta el siguiente comando en la terminal:

```bash
npm start
````

Alternativamente, puedes ejecutarlo manualmente con:

```bash
node src/app.js
```

El servidor iniciará en el puerto **3000** (http://localhost:3000).

## 🔌 Endpoints de la API

El proyecto implementa los siguientes métodos REST para el manejo de recursos (ejemplo: usuarios):

  * **GET** `/api/users`: Obtener la lista de usuarios.
  * **POST** `/api/users`: Crear un nuevo usuario (enviar JSON en el body).
  * **PUT** `/api/users/:id`: Actualizar un usuario existente por ID.
  * **DELETE** `/api/users/:id`: Eliminar un usuario por ID.

## 📦 Dependencias Utilizadas

  * **express**: Framework para manejar el servidor y las rutas.
  * **morgan**: Middleware para registrar las peticiones HTTP (logs).
  * **cors**: Middleware para permitir peticiones de otros dominios.
  * **nodemon**: Utilidad para el desarrollo (reinicio automático).

## 👤 Autor

Alberto Saldierna

```
```
