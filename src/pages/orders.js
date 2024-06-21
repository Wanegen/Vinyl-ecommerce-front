import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Orders() {
  const [vinyls, setVinyls] = useState([]);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    console.log('Fetching vinyls...');
    fetch('http://localhost:3000/vinyls') // Remplace par l'URL de ton API
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        setVinyls(data);
      })
      .catch(error => console.error('Erreur lors de la récupération des vinyls:', error));
  }, []);
  return (
    <div>
      <h1>Vos commandes</h1>

      {/* <div className="Vinyls">
        {vinyls.length > 0 ? (
          vinyls.map(vinyl => (
            <div key={vinyl.id} className="Vinyl">
              <h2>{vinyl.name}</h2>
              <p>{vinyl.description}</p>
              <p>Prix: {vinyl.price} €</p>
            </div>
          ))
        ) : (
          <p>Aucun vinyl disponible</p>
        )}
      </div> */}
      <a onClick={handleBackClick} className="button">Retour</a>
    </div>
  )
}
