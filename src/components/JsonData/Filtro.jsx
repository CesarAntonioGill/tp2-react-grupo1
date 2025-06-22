import React from "react";

const Filtro = ({ categoria, categorias, onChange }) => (
  <select value={categoria} onChange={onChange} style={{ padding: "8px", width: "100%", marginBottom: "10px" }}>
    <option value="">Todas las categorías</option>
    {categorias.map((cat) => (
      <option key={cat} value={cat}>{cat}</option>
    ))}
  </select>
);

export default Filtro;
