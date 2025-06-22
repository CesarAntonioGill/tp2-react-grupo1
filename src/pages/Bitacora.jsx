import "./Bitacora.css";

export default function Bitacora() {
  return (
    <div className="bitacora-body">
      <h2>📝 Bitácora del Proyecto - Grupo 1</h2>

      <section style={{ marginBottom: '2rem' }}>
        <h3>👥 Roles de los integrantes</h3>
        <ul>
          <li><strong>Damián Andrés Clausi:</strong> Desarrollo de interfaz y navegación</li>
          <li><strong>Antonio Gill:</strong> Desarrollo de API y lógica de negocio</li>
          <li><strong>Cristian Descosido:</strong> Documentación y pruebas</li>
          <li><strong>Rocío Ailén Gómez:</strong> Diseño y estilos</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h3>🛠️ Herramientas utilizadas</h3>
        <ul>
          <li><strong>Visual Studio Code</strong> – editor de código</li>
          <li><strong>GitHub</strong> – control de versiones y repositorio</li>
          <li><strong>Vercel</strong> – despliegue del sitio</li>
          <li><strong>Discord</strong> – comunicación grupal</li>
          <li><strong>Trello</strong> – organización de tareas </li>
        </ul>
      </section>

      <section>
        <h3>📌 Metodología de trabajo</h3>
        <p>
          A cada integrante le correspondió desarrollar su propia SPA (Single Page Application) de manera individual, abordando diferentes temáticas y funcionalidades. El trabajo se realizó de forma autónoma, pero compartiendo avances y resolviendo dudas en conjunto cuando fue necesario.
        </p>
        <p>
          Al finalizar cada desarrollo, se integraron los aportes en el repositorio grupal y se realizaron pruebas generales antes de la entrega final.
        </p>
      </section>

      {/* Sección de Control de Cambios (HEAD) */}
      <section>
        <h3>Control de Cambios</h3>
        <strong><p>22/6/2025</p></strong>
        <p>En la página de Cristian se reemplazó la sección estática de proyectos por una sección tipo carousel donde se muestran los proyectos.</p>
        <p>Para desarrollar esta sección se usó la librería Swiper.js que maneja las animaciones y controles del carousel. Su utilizó de esta librería entre otros el efecto parallax para la animación de los textos.</p>
      </section>

      {/* Sección de Actualización (Damian) */}
      <section style={{ marginTop: '3rem' }}>
        <h3>Actualización</h3>
        <h4 style={{ color: '#2c3e50' }}>Damián Clausi: Datos JSON - Peliculas</h4>
        <p>
          Se realizaron mejoras en la sección de películas cargadas desde un JSON local. Ahora el componente principal <b>JsonData.jsx</b> permite buscar películas por título o director mediante un campo de texto y filtrar los resultados por género usando un menú desplegable ordenado alfabéticamente. Se crearon los componentes <b>Buscador.jsx</b>, <b>Filtro.jsx</b> y <b>PeliculasList.jsx</b> para dividir la lógica y la presentación. Además, se agregó la visualización del género de cada película. Todo el filtrado y la búsqueda se manejan con <b>useState</b> y <b>filter()</b> para una experiencia interactiva y clara.
        </p>
      </section>
    </div>
  )
}
