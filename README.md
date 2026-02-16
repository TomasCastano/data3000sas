# Landing Data 3000 S.A.S

Landing page profesional para **Data 3000 S.A.S**, una empresa experta en **gestión documental**.  
El sitio está construido con **Astro** y **React**, usando componentes de **Material UI (MUI)**, animaciones suaves y un diseño optimizado para rendimiento y SEO.

La landing presenta los servicios, experiencia y canales de contacto de la empresa de forma clara, moderna y orientada a conversión.


## 🚀 Tecnologías principales

- **Astro 5** – Framework principal (rutas, layouts, SEO).  
- **React 19** – Componentes interactivos (`@astrojs/react`).  
- **Material UI (MUI)** – Sistema de componentes (`@mui/material`, `@mui/icons-material`).  
- **Emotion** – Librería CSS-in-JS usada por MUI.  
- **Axios** – Llamadas HTTP para formularios/APIs.  
- **Swiper** – Sliders responsivos.  
- **Lenis** – Scroll suave para mejorar la experiencia de navegación.


## 📁 Estructura del proyecto

Estructura base del directorio `src/`:

- **src/api/**  
  Lógica de comunicación con APIs (ej.: envío de formularios).

- **src/assets/**  
  Imágenes, íconos y estilos globales (`reset.css`).

- **src/components/**  
  Componentes reutilizables (botones, cards, etc.).

- **src/layouts/**  
  Layouts globales.  
  Ejemplo: `Layout.astro` gestiona:
  - Metadatos de SEO (title, description, Open Graph, Twitter).
  - Inclusión de Navbar y Footer.
  - Integración de **Lenis** para smooth scroll.
  - Un `<slot />` para el contenido de cada página.

- **src/pages/**  
  Rutas principales del sitio (cada archivo = una página).

- **src/sections/**  
  Secciones completas del sitio (hero, servicios, testimonios, etc.).

## 🧱 Arquitectura y puntos clave

### Astro + React
- Astro administra la estructura, rutas, metadatos y layouts.  
- React maneja componentes interactivos (sliders, formularios, UI dinámica).

### Layout global (`Layout.astro`)
Define la estructura base del HTML:

- `<html lang="es">`
- `<head>` con SEO, Open Graph y Twitter
- Navbar y Footer  
- Integración de **Lenis** para scroll suave

### Estilos
- `reset.css` para normalizar estilos.  
- MUI + Emotion como sistema principal de estilos.  
- Archivos `.css` o `.astro` específicos por sección cuando es necesario.

### Scroll suave (Lenis)
Implementado desde `Layout.astro` para suavizar el desplazamiento.

## 📄 Licencia

Este proyecto es propiedad de **Data 3000 S.A.S**.  
La modificación, copia o redistribución están sujetas a los acuerdos internos de la empresa.

---

Hecho con ❤️ por [Tomás Castaño](https://www.linkedin.com/in/tomascastanochica/)