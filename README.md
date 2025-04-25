# 🧪 Node.js + TypeScript Base API

Plantilla base para crear APIs con Node.js y TypeScript, con soporte para recarga en desarrollo, alias, rutas organizadas y preparación para producción.

---

## 🔥 IDEAL PARA:

    APIs REST

    Backends para login / autenticación

    Proyectos conectados a bases de datos

    Aplicaciones Express escalables

---

## 🚀 Tecnologías utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **ts-node-dev** (para desarrollo con hot reload)
- **tsconfig-paths** (para usar aliases como `@/`)
- **dotenv** (manejo de variables de entorno)
- **cors** (CORS para APIs públicas o frontend separado)

---

## 📝 Notas

El archivo tsconfig.json está configurado para usar @/ como alias de src/.

El código fuente debe ir dentro de la carpeta src/.

El código compilado irá a dist/ al correr npm run build.

---

## 🛠️ Scripts disponibles

| Comando        | Descripción                                                      |
|----------------|------------------------------------------------------------------|
| `npm run dev`  | Inicia el proyecto en modo desarrollo con recarga automática     |
| `npm run build`| Compila TypeScript a JavaScript dentro de la carpeta `dist/`     |
| `npm start`    | Ejecuta el código compilado (modo producción)                    |
| `npm run clean`| Elimina la carpeta `dist/` para limpiar el proyecto              |

> 🪟 En Windows, el comando `clean` puede requerir reemplazar `rm -rf` por `rmdir /s /q dist`

---

## 🔧 Instalación

```bash
git clone https://github.com/brunnoce/base-node-ts
cd base-node-ts
npm install
npm run dev