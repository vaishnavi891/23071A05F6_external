import React from 'react';

function Materials() {
  // Fake materials list
  const materials = [
    { id: 1, title: 'Math Notes', description: 'Algebra and Geometry' },
    { id: 2, title: 'Physics Slides', description: 'Mechanics and Thermodynamics' },
    { id: 3, title: 'Chemistry Lab Manual', description: 'Experiments and Procedures' },
  ];
  return (
    <div style={{ padding: 20 }}>
      <h2>Materials</h2>
      <ul>
        {materials.map((m) => (
          <li key={m.id}>
            <strong>{m.title}</strong>: {m.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Materials;
