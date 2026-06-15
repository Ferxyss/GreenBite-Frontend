# GreenBite - Frontend

## Descripción

Aplicación frontend desarrollada con React y Vite para interactuar con los microservicios del proyecto GreenBite.

La aplicación consume los servicios a través del BFF (Backend For Frontend), permitiendo gestionar productos y suscripciones desde una interfaz web única.

---

## Tecnologías Utilizadas

* React
* Vite
* JavaScript
* Axios
* CSS3

---

## Arquitectura

```text
Frontend React (5173)
          │
          ▼
     BFF Gateway
      Puerto 8080
          │
   ┌──────┴──────┐
   ▼             ▼
Productos     Suscripciones
  8081           8082
MongoDB          H2
```

---

## Funcionalidades

### Productos

* Listar productos
* Registrar productos
* Eliminar productos

### Suscripciones

* Listar suscripciones
* Registrar suscripciones
* Eliminar suscripciones

---

## Configuración API

La aplicación consume el BFF mediante:

```text
http://localhost:8080
```

---

## Instalación

### Instalar dependencias

```bash
npm install
```

### Ejecutar entorno de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en:

```text
http://localhost:5173
```

---

## Estructura del Proyecto

```text
src
├── assets
├── pages
│   ├── Productos.jsx
│   └── Suscripciones.jsx
├── services
│   └── api.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

---

## Dependencias Principales

* React
* Axios
* Vite

---

## INTEGRANTES

- Fernanda Paredes
- Martina Flores
- Alexander Torres

Proyecto desarrollado para la asignatura Desarrollo FullStack III utilizando arquitectura de microservicios y patrón Backend For Frontend (BFF).
