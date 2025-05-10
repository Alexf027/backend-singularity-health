# 🚀 Singularity Health - Backend GraphQL API

Este proyecto implementa una API **GraphQL** con **Node.js**, **TypeScript**, **Sequelize** y **PostgreSQL**, diseñada para gestionar el registro y validación de usuarios, documentos de identidad y contactos de emergencia, en base al modelo de datos especificado por Singularity Health.

---

## 📦 Stack tecnológico

- **Node.js** + **Express**
- **TypeScript**
- **GraphQL (Apollo Server v4)**
- **Sequelize ORM**
- **PostgreSQL**
- **bcryptjs** para hashing seguro de contraseñas

---

## 📁 Estructura del proyecto

/src
├── config/ # Conexión a la base de datos
├── models/ # Modelos Sequelize alineados al diagrama
├── graphql/ # Schemas y resolvers de GraphQL
├── utils/ # Funciones auxiliares (e.g. hashing)
├── app.ts # Inicialización Apollo + Express
└── server.ts # Entry point del servidor

---

##  🔧 Instalación de Dependecias

npm install

---

# Crea archivo .env y configura las variables de entorno

DB_NAME=singularity
DB_USER=postgres
DB_PASSWORD=123456789
DB_HOST=localhost
DB_PORT=5433 o 5432

---

## 🔐 Seguridad

- Contraseñas encriptadas con bcrypt

- Validación de duplicados por email y documento

- Uso de claves foráneas para integridad relacional

---

## 📌 Scripts disponibles

- npm run dev       # Desarrollo con ts-node
- npm run build     # Compilar a JavaScript
- npm start         # Ejecutar app desde /dist

---

## 👨‍💻 Autor
Desarrollado por Alexander F. para la prueba técnica de Singularity Health.
