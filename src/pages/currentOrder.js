import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function VinylDetail() {
  const { id } = useParams();
  const [vinyl, setVinyl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/vinyls/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setVinyl(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <p>Votre commande en cours </p>
      <a href={handleBackClick} className="button">Retour</a>
    </div>
    // <div>
    //   <div className="Vinyl">
    //     <h2>{vinyl.name}</h2>
    //     <p>{vinyl.description}</p>
    //     <p>Prix: {vinyl.price} €</p>
    //     <a href={`/orders/${vinyl.id}`} className="button">Acheter ce vinyl</a>
    //   </div>
    // </div>
  );
}

export default VinylDetail;
