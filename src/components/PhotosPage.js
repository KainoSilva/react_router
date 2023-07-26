import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function PhotosPage() {
  const [photos, setPhotos] = useState([]);
  const navigate = useNavigate();
  const { albumId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error('Error fetching photos:', error));
  }, [albumId]);

  return (
    <div className='PhotosPage'>
      <h2>Photos</h2>
      {photos.map((photo) => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <p>{photo.title}</p>
        </div>
      ))}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default PhotosPage;
