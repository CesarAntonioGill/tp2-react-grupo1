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
        <h3>📌 Primera entrega</h3>
        <p>
          A cada integrante le correspondió desarrollar su propia SPA (Single Page Application) de manera individual, abordando diferentes temáticas y funcionalidades. El trabajo se realizó de forma autónoma, pero compartiendo avances y resolviendo dudas en conjunto cuando fue necesario.
        </p>
        <p>
          Al finalizar cada desarrollo, se integraron los aportes en el repositorio grupal y se realizaron pruebas generales antes de la entrega final.
        </p>
      </section>
      <section>
      <br/>
        <h3>📌 Segunda Entrega</h3>
        <section style={{marginBottom: '1.5rem'}}>
          <h4>🔹 Antonio Gill – Paginación para la API Externa</h4>
          <p>
            Se implementó la paginación para una API externa, utilizando <b>fetch()</b> para obtener los datos y botones para navegar entre páginas. El número de página se gestiona con <b>useState</b> y se muestra el estado de la paginación (por ejemplo, "Página 2 de 5"). Para esto, se utilizó la API de <a href="https://api.themoviedb.org" target="_blank" rel="noopener noreferrer">The Movie Database</a>, que soporta paginación y permite explorar diferentes resultados de manera dinámica.
          </p>
        </section>
        <section style={{marginBottom: '1.5rem'}}>
          <h4>🔹 Cristian Descosido – Carrusel de Proyectos Destacados</h4>
          <p>En la página de Cristian se reemplazó la sección estática de proyectos por una sección tipo carousel donde se muestran los proyectos.</p>
          <p>Para desarrollar esta sección se usó la librería Swiper.js que maneja las animaciones y controles del carousel. Su utilizó de esta librería entre otros el efecto parallax para la animación de los textos.</p>
        </section>
        <section style={{marginBottom: '1.5rem'}}>
          <h4>🔹 Damian Clausi – Búsqueda y Filtrado en JSON Local</h4>
          <p>
          Se realizaron mejoras en la sección de películas cargadas desde un JSON local. Ahora el componente principal <b>JsonData.jsx</b> permite buscar películas por título o director mediante un campo de texto y filtrar los resultados por género usando un menú desplegable ordenado alfabéticamente. Se crearon los componentes <b>Buscador.jsx</b>, <b>Filtro.jsx</b> y <b>PeliculasList.jsx</b> para dividir la lógica y la presentación. Además, se agregó la visualización del género de cada película. Todo el filtrado y la búsqueda se manejan con <b>useState</b> y <b>filter()</b> para una experiencia interactiva y clara.
        </p>
        </section>        
        <section style={{marginBottom: '1.5rem'}}>
          <h4>🔹 Rocio Gómez – Barras de Progreso de Habilidades</h4>
          <p>
            Se implementó una sección de habilidades con barras de progreso animadas que se visualizan en las páginas de todos los integrantes. Los datos de las habilidades se encuentran en un JSON local y se renderizan dinámicamente usando <b>map()</b>. Cada barra representa el nivel de conocimiento en una tecnología específica para cada miembro del grupo, y se visualiza mediante componentes reutilizables. El diseño y la animación de las barras se adaptan al estilo general de la SPA, asegurando una integración visual coherente y responsiva en las páginas <b>Antonio.jsx</b>, <b>Damian.jsx</b>, <b>Cristian.jsx</b> y <b>Rocio.jsx</b>.
          </p>
        </section>
        
      </section>           
    </div>
  )
}
