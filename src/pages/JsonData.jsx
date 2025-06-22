import React, { useState } from "react";
import data from "../data/data.json";
import "./JsonData.css";
import Buscador from "../components/JsonData/Buscador";
import Filtro from "../components/JsonData/Filtro";
import PeliculasList from "../components/JsonData/PeliculasList";

export default function JsonData() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  // Obtener géneros únicos y ordenarlos alfabéticamente
  const categorias = Array.from(new Set(data.map((p) => p.genero))).sort((a, b) => a.localeCompare(b));

  // Filtrado
  const peliculasFiltradas = data.filter((p) => {
    const coincideBusqueda =
      p.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.director.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoria === "" || p.genero === categoria;
    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div className="json-data">
      <h2>🎬 Lista de Películas (desde JSON)</h2>
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <Buscador valor={busqueda} onChange={e => setBusqueda(e.target.value)} />
        <Filtro categoria={categoria} categorias={categorias} onChange={e => setCategoria(e.target.value)} />
      </div>
      <div className="json-data-container">
        <PeliculasList peliculas={peliculasFiltradas} />
      </div>
    </div>
  );
}
