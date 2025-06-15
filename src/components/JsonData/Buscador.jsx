import React from "react";

const Buscador = ({ valor, onChange }) => (
  <input
    type="text"
    placeholder="Buscar por título o director..."
    value={valor}
    onChange={onChange}
    style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
  />
);

export default Buscador;
