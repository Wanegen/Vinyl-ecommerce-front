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

  const handleOrder = () => {
    fetch(`http://localhost:3000/orders/1/add_vinyl/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Order updated:', data);
        // Navigate to order summary or another relevant page
        navigate('/orders/1');
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>{vinyl.name}</h1>
      <p>{vinyl.description}</p>
      <p>Prix: {vinyl.price} €</p>
      <a onClick={handleOrder} className="button">Commander</a>
      <a onClick={handleBackClick} className="button">Retour</a>
    </div>
  );
}

export default VinylDetail;
