# 💻 Trabajo Práctico Grupal 2

Tecnicatura en Desarrollo de Software – IFTS N.º 29  
Desarrollo de Sistemas Web Frontend  
GRUPO 1 - COMISION D  
Entrega: 23 de junio de 2025

## 🌟 Implementaciones individuales

### 🔹 Antonio Gill – Paginación para la API Externa

Se implementó la paginación para una API externa, utilizando **fetch()** para obtener los datos y botones para navegar entre páginas. El número de página se gestiona con **useState** y se muestra el estado de la paginación (por ejemplo, "Página 2 de 5"). Para esto, se utilizó la API de [The Movie Database](https://api.themoviedb.org), que soporta paginación y permite explorar diferentes resultados de manera dinámica.

### 🔹 Cristian Descosido – Carrusel de Proyectos Destacados

En la página de Cristian se reemplazó la sección estática de proyectos por una sección tipo carousel donde se muestran los proyectos. Para desarrollar esta sección se usó la librería Swiper.js que maneja las animaciones y controles del carousel. Se utilizó, entre otros, el efecto parallax para la animación de los textos.

### 🔹 Damian Clausi – Búsqueda y Filtrado en JSON Local

Se realizaron mejoras en la sección de películas cargadas desde un JSON local. Ahora el componente principal **JsonData.jsx** permite buscar películas por título o director mediante un campo de texto y filtrar los resultados por género usando un menú desplegable ordenado alfabéticamente. Se crearon los componentes **Buscador.jsx**, **Filtro.jsx** y **PeliculasList.jsx** para dividir la lógica y la presentación. Además, se agregó la visualización del género de cada película. Todo el filtrado y la búsqueda se manejan con **useState** y **filter()** para una experiencia interactiva y clara.

### 🔹 Rocio Gómez – Barras de Progreso de Habilidades

Se implementó una sección de habilidades con barras de progreso animadas que se visualizan en las páginas de todos los integrantes. Los datos de las habilidades se encuentran en un JSON local (**skills.json**) y se renderizan dinámicamente usando **map()**. Cada barra representa el nivel de conocimiento en una tecnología específica para cada miembro del grupo, y se visualiza mediante componentes reutilizables desarrollados por Rocio. El diseño y la animación de las barras se adaptan al estilo general de la SPA, asegurando una integración visual coherente y responsiva en las páginas **Antonio.jsx**, **Damian.jsx**, **Cristian.jsx** y **Rocio.jsx**.

---

## 🌐 Enlaces

### TP1

- 🔗 [GitHub](https://github.com/damianclausi/tp1-react-grupo1)
- 🔗 [Vercel](https://tp1-react-grupo1.vercel.app)

### TP2

- 🔗 [GitHub](https://github.com/CesarAntonioGill/tp2-react-grupo1)
- 🔗 [Vercel](https://tp2-react-grupo1-teyq.vercel.app/)

---

## 🚀 Instalación y ejecución local

Sigue estos pasos para instalar y ejecutar el proyecto en tu entorno local:

1. **Clona el repositorio:**

   ```sh
   git clone https://github.com/CesarAntonioGill/tp2-react-grupo1
   ```

2. **Accede a la carpeta del proyecto:**

   ```sh
   cd tp2-react-grupo1
   ```

3. **Instala las dependencias:**

   ```sh
   npm install
   ```

4. **Inicia la aplicación en modo desarrollo:**

   ```sh
   npm run dev
   ```

5. **Abre la aplicación en tu navegador:**

   Normalmente se abrirá automáticamente en `http://localhost:5173/`. Si no, abre esa URL manualmente.

---

> Proyecto entregado como parte del Trabajo Práctico 2  
> Grupo 1 – Tecnicatura en Desarrollo de Software – IFTS N.º 29
