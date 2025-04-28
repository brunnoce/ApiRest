# 📚 ApiRest

API RESTful construida con **Node.js**, **TypeScript**, **Express** y **MongoDB**.

Proyecto desarrollado como práctica de arquitectura de APIs modernas, utilizando controladores, servicios, middlewares y control de errores de forma organizada.

---

## 🚀 Tecnologías principales

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [MongoDB + Mongoose](https://mongoosejs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv) (manejo de variables de entorno)
- [bcrypt](https://www.npmjs.com/package/bcrypt) (encriptado de passwords)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) (JWT para autenticación)

---

## 🛠 Estructura del proyecto

<pre>
src/
│
├── controllers/     # Lógica de controladores (manejan las rutas)
├── services/        # Lógica de negocio (servicios para DB)
├── models/          # Modelos de Mongoose
├── routes/          # Definición de endpoints
├── middlewares/     # Middlewares personalizados
├── utils/           # Utilidades (manejo de errores, JWT, etc.)
├── config/          # Configuración (MongoDB, otros)
├── interfaces/      # Definición de tipos/interfaces TypeScript
├── server/          # Encendido del servidor Express
└── app.ts           # Archivo principal de la app
</pre>

---

## 🛡 Funcionalidades actuales

- CRUD de ítems (modelo de autos como ejemplo).
- Manejo de errores centralizado.
- Tokenización JWT para autenticación (en proceso de expansión).
- Validaciones iniciales.
- Arquitectura escalable (controladores, servicios, modelos separados).

---

## ✏ Ejemplos de endpoints 

### /item: CRUD de ítems (autos).

Método | Ruta         | Descripción              | Cuerpo requerido
:------|:------------:|:------------------------:|:----------------:
GET    | /item        | Obtener todos los ítems  | No
GET    | /item/:id    | Obtener un ítem por ID   | No
POST   | /item        | Crear un nuevo ítem      | Sí (JSON)
PUT    | /item/:id    | Actualizar un ítem por ID| Sí (JSON)
DELETE | /item/:id    | Eliminar un ítem por ID  | No

Ejemplo de cuerpo para POST o PUT:
```json
{
  "name": "Fiat",
  "color": "Black",
  "gas": "gasoline",
  "year": 2020,
  "description": "Brand new",
  "price": 3000
}
```

### /auth: Registro y login de usuarios.

Método | Ruta               | Descripción                  | Cuerpo requerido
:------|:------------------:|:----------------------------:|:----------------:
POST   | /auth/register     | Registrar nuevo usuario      | Sí (JSON)
POST   | /auth/login        | Iniciar sesión de usuario    | Sí (JSON)


Ejemplo de cuerpo para registro (/auth/register):
```json
{
  "name": "Bruno",
  "email": "bruno@example.com",
  "password": "123456"
}
```

Ejemplo de cuerpo para login (/auth/login):
```json
{
  "email": "bruno@example.com",
  "password": "123456"
}
```

### /order: Consultar las órdenes del usuario autenticado.

Método | Ruta     | Descripción                             | Cuerpo requerido
:------|:--------:|:---------------------------------------:|:----------------:
GET    | /order   | Obtener órdenes del usuario autenticado | No

Authorization: Bearer <tu_token>

---
## 📦 Instalación

```bash
git clone https://github.com/brunnoce/ApiRest.git
cd ApiRest
npm install
```
Crear .env con

```bash
PORT=3000
MONGODB_URL_STRING=mongodb://localhost:27017/apirest-2
JWT_SECRET=tu_secreto_aqui
```

Finalmente
```bash
npm run dev
```
