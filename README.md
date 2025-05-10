# 🚀 Singularity Health - Backend GraphQL API

Este proyecto implementa una API **GraphQL** desarrollada en **Node.js + TypeScript**, conectada a **PostgreSQL** mediante **Sequelize ORM**, con el objetivo de gestionar registros de usuarios, documentos de identidad, información de contacto y validación segura de contraseñas, cumpliendo el modelo relacional establecido por Singularity Health.

---

## 📦 Stack tecnológico

- **Node.js** + **Express**
- **TypeScript**
- **GraphQL** (Apollo Server v4)
- **Sequelize ORM**
- **PostgreSQL**
- **bcryptjs** (hashing de contraseñas)

---

## 📁 Estructura del proyecto

```plaintext
/src
├── config/           # Configuración de conexión a la base de datos
├── models/           # Modelos Sequelize según el diagrama relacional
├── graphql/          # Schemas y resolvers de GraphQL (Apollo Server)
├── utils/            # Funciones auxiliares (ej. hashing de contraseñas)
├── app.ts            # Configuración de Apollo Server con Express
└── server.ts         # Entry point del servidor (ejecución principal)
```

---

## 🔧 Instalación local

### 1. Clona el repositorio

```bash
git clone https://github.com/Alexf027/backend-singularity-health.git
cd backend-singularity-health
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Crea archivo `.env` y configura las variables de entorno

```env
DB_NAME=singularity
DB_USER=postgres
DB_PASSWORD=123456789
DB_HOST=localhost
DB_PORT=5432
```

---

## 🗄️ Configuración de base de datos PostgreSQL

Asegúrate de que:

- PostgreSQL esté corriendo en el **puerto 5433**
- Existe una base de datos llamada **`singularity`**
- El usuario `postgres` tenga los permisos adecuados

Puedes crearla con:

```sql
CREATE DATABASE singularity;
```

Y opcionalmente poblar tablas auxiliares:

```sql
INSERT INTO "TypeDocument_TB" ("NameTypeDocument") VALUES ('Cédula de ciudadanía');
INSERT INTO "Country_TB" ("CountryCode", "CountryName") VALUES ('CO', 'Colombia');
```

---

## ▶️ Ejecutar el servidor

```bash
npm run dev
```

Accede a GraphQL en:

```
http://localhost:4000/graphql
```

---

## 🧪 Ejemplo de mutación `registerUser`

```graphql
mutation {
  registerUser(data: {
    name: "Luis",
    lastName: "Martínez",
    username: "luism",
    email: "luis@example.com",
    password: "Secure123!",
    isMilitar: false,
    isTemporal: false,
    documentNumber: "1234567890",
    typeDocumentId: 1,
    placeExpedition: "Bogotá",
    dateExpedition: "2015-06-25",
    address: "Cra 45 #123-45",
    city: "Bogotá",
    countryId: 1,
    phone: "6011234567",
    celPhone: "3001234567",
    emergencyName: "Ana Pérez",
    emergencyPhone: "3104567890"
  }) {
    id
    name
    lastName
    email
  }
}
```

⚠️ Asegúrate que existan registros en `TypeDocument_TB` y `Country_TB` con `id = 1`.

---

## 🔐 Seguridad

- Contraseñas encriptadas con `bcrypt`
- Validación de duplicados por `email` y `documento`
- Uso de claves foráneas para integridad relacional

---

## 📌 Scripts disponibles

```bash
npm run dev       # Desarrollo con ts-node
npm run build     # Compilar a JavaScript
npm start         # Ejecutar app desde /dist
```

---

## 👨‍💻 Autor

Desarrollado por **Alexander F.** para la prueba técnica de **Singularity Health**.

---

## 📄 Licencia

MIT
