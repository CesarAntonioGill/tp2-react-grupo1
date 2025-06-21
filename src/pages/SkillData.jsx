import React from 'react';
import perfiles from '../data/skills.json';
import SkillBar from '../pages/SkillBar';

const SkillData = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ marginBottom: '2rem' }}>Perfiles y Habilidades</h1>
      {perfiles.map((perfil, index) => (
        <div key={index} style={{ marginBottom: '3rem' }}>
          <h2 style={{ marginBottom: '0.3rem' }}>{perfil.nombre}</h2>
          <p style={{ marginBottom: '1rem', color: '#666' }}>Rol: {perfil.rol}</p>
          {perfil.habilidades.map((hab, i) => (
            <SkillBar key={i} nombre={hab.nombre} porcentaje={hab.porcentaje}/>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SkillData;
