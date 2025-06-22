import React from "react";

const PeliculasList = ({ peliculas }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
    {peliculas.length === 0 ? (
      <p>No se encontraron películas.</p>
    ) : (
      peliculas.map((peli) => (
        <div key={peli.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "12px", width: "180px", textAlign: "center" }}>
          <img src={peli.caratula} alt={peli.titulo} style={{ width: "100%", borderRadius: "4px" }} />
          <h4>{peli.titulo}</h4>
          <p><b>Director:</b> {peli.director}</p>
          <p><b>Año:</b> {peli.anio}</p>
          <p><b>Género:</b> {peli.genero}</p>
        </div>
      ))
    )}
  </div>
);

export default PeliculasList;
