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


## 📦 Requisitos previos

- Node.js 18+ (versión LTS recomendada).  
- npm (o pnpm/yarn si lo prefieres).  
- Git (opcional para clonar el repositorio).

Verificación de versiones:

```bash
node -v
npm -v
```

## 🔧 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU-USUARIO/landing-data-3000.git
cd landing-data-3000
```

### 2. Instalar dependencias

```bash
npm install
```

Esto instalará, entre otras:

- astro  
- @astrojs/react  
- react, react-dom  
- @mui/material  
- @mui/icons-material  
- @emotion/react  
- @emotion/styled  
- axios  
- swiper  
- lenis

## 🏃 Scripts disponibles

Definidos en `package.json`:

```json
{
  "scripts": {
    "dev": "astro dev --host",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

### Uso

#### Desarrollo (con hot reload)

```bash
npm run dev
```

Activa el servidor de desarrollo de Astro. `--host` permite acceder desde otros dispositivos en la red local.

#### Build de producción

```bash
npm run build
```

Genera la versión estática del sitio en la carpeta `dist/`.

#### Previsualizar el build

```bash
npm run preview
```

Sirve lo que está en `dist/` para pruebas previas al despliegue.

#### Comandos directos de Astro

```bash
npm run astro -- <comando>
```

Ejemplo:

```bash
npm run astro -- check
```

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

## 🌐 Despliegue (Deploy)

El proyecto es completamente estático tras el build, por lo que puede desplegarse en:

- Netlify  
- Vercel  
- GitHub Pages (con configuración adicional)  
- Cualquier hosting estático que sirva la carpeta `dist/`

### Flujo típico

1. Generar build:

```bash
npm run build
```

2. Subir la carpeta `dist/` a tu hosting.

### Configuración en Netlify o Vercel

- Comando de build: `npm run build`  
- Directorio de salida: `dist`

## 🧩 Cómo extender el proyecto

### Nueva sección
1. Crear una carpeta en `src/sections/NuevaSeccion/`.  
2. Si es estática, usar `.astro`.  
3. Si es interactiva, usar React `.jsx/.tsx`.  
4. Importarla en la página correspondiente.

### Nuevo componente reutilizable
1. Crear el componente en `src/components/`.  
2. Mantener props claras y fáciles de extender.  
3. Evitar duplicar lógica.

### Formularios / APIs
- Usar Axios para peticiones.  
- Guardar la lógica en `src/api/` o en hooks/servicios.  
- Mantener separación entre vista y lógica.

## 👨‍💻 Buenas prácticas recomendadas

- Modularizar secciones y componentes.  
- Mantener la arquitectura: Layout → Pages → Sections → Components.  
- Mantener la coherencia visual con MUI.  
- Optimizar SEO en cada página cuando lo requiera.  
- Reutilizar componentes antes de crear nuevos.

## 🤝 Contribución

Si otra persona va a colaborar:

1. Crear una rama desde `main`:

```bash
git checkout -b feature/nombre-de-la-feature
```

2. Hacer cambios siguiendo la estructura del proyecto.

3. Validar:

```bash
npm run dev
npm run build
```

4. Crear un Pull Request indicando:
   - Qué se cambió  
   - Por qué  
   - Cómo probarlo

## 📄 Licencia

Este proyecto es propiedad de **Data 3000 S.A.S**.  
La modificación, copia o redistribución están sujetas a los acuerdos internos de la empresa.

---

Hecho con ❤️ por [Tomás Castaño](https://www.linkedin.com/in/tomascastanochica/)