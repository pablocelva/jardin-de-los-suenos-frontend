# 🛒 Jardín de los Sueños - E-commerce Frontend

Bienvenido al repositorio del frontend para **Jardín de los Sueños**, una tienda en línea moderna y responsiva diseñada para ofrecer una experiencia de compra fluida. Este proyecto ha sido recientemente actualizado a las últimas versiones estables de **React 19** y **Vite 8** para garantizar el máximo rendimiento y seguridad.

## 🚀 Características Principales

- **Catálogo de Productos:** Visualización dinámica de productos con imágenes, descripciones y precios.
- **Carrito de Compras:** Gestión completa del carrito (agregar, eliminar, actualizar cantidades) con persistencia de datos.
- **Navegación Responsiva:** Diseño adaptativo utilizando **Bootstrap 5**, compatible con móviles, tablets y escritorio.
- **Enrutamiento:** Navegación fluida entre páginas sin recargas gracias a **React Router DOM**.
- **Rendimiento Optimizado:** Compilación ultrarrápida y bundles ligeros gracias a **Vite 8** (con motor Rolldown).
- **Código Moderno:** Desarrollado con **React 19**, aprovechando las últimas mejoras en hooks y renderizado.

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Descripción |
| :--- | :--- | :--- |
| **React** | v19.2.5 | Biblioteca principal para la interfaz de usuario. |
| **Vite** | v8.0.10 | Herramienta de build y servidor de desarrollo (Next-Gen). |
| **Bootstrap** | v5.3.3 | Framework CSS para el diseño responsivo. |
| **React Bootstrap** | v2.10.4 | Componentes de Bootstrap nativos para React. |
| **React Router** | v6.30.3 | Enrutamiento dinámico para SPA. |
| **ESLint** | v8.57.0 | Linting y mantenimiento de calidad de código. |

## 📦 Instalación y Configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/pablocelva/jardin-de-los-suenos-frontend.git
    cd jardin-de-los-suenos-frontend/frontend
    ```

2.  **Instala las dependencias:**
    Asegúrate de tener Node.js (v18 o superior) instalado.
    ```bash
    npm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique la terminal).

## 🏗️ Comandos Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local con HMR (Hot Module Replacement). |
| `npm run build` | Genera la versión de producción optimizada en la carpeta `dist`. |
| `npm run lint` | Ejecuta ESLint para analizar y corregir problemas de código. |
| `npm run preview` | Vista previa local de la versión de producción. |
| `npm run deploy` | Compila el proyecto y lo despliega automáticamente a **GitHub Pages**. |

## 🌐 Despliegue (Deploy)

Este proyecto está configurado para desplegarse en **GitHub Pages** utilizando la librería `gh-pages`.

1.  Asegúrate de que tu código esté commiteado y subido a la rama `main`.
2.  Ejecuta el comando de despliegue:
    ```bash
    npm run deploy
    ```
3.  Este comando generará la carpeta `dist`, la subirá a una rama llamada `gh-pages` y actualizará el sitio live.
4.  El sitio estará disponible en: [https://pablocelva.github.io/jardin-de-los-suenos-frontend/](https://pablocelva.github.io/jardin-de-los-suenos-frontend/)

> **Nota:** La configuración de GitHub Pages en el repositorio debe apuntar a la rama `gh-pages` y a la carpeta raíz (`/root`).

## 📁 Estructura del Proyecto

```text
frontend/
├── public/             # Archivos estáticos (favicon, imágenes públicas)
├── src/
│   ├── components/     # Componentes reutilizables (Navbar, ProductCard, Cart, etc.)
│   ├── context/        # Contexto global (Productos, Carrito, etc.)
│   ├── data/           # Datos de ejemplo (Productos, Carrito, etc.)
│   ├── pages/          # Vistas principales (Home, Shop, Cart, Checkout)
│   ├── App.jsx         # Componente principal y enrutamiento
│   ├── main.jsx        # Punto de entrada de React
│   └── index.css       # Estilos globales
├── package.json        # Dependencias y scripts
├── vite.config.js      # Configuración de Vite y rutas base
└── README.md           # Documentación del proyecto
```
