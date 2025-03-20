// frontend/src/App.jsx
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Mon Projet d'Échecs</h1>
      {data ? <p>{data.message}</p> : <p>Chargement...</p>}
    </div>
  );
}

export default App;
