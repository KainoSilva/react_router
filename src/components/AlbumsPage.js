import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AlbumsPage() {
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();
  const { userId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then((response) => response.json())
      .then((albums) => setAlbums(albums))
  }, [userId]);

  return (
    <div>
      <h2>Albums</h2>
      <div className='AlbumsPage'>
        {albums.map((album) => (
          <div key={album.id}>
            <p>{album.title}</p>
            <button onClick={() => navigate(`/albums/${album.id}/photos`)}>
              Photos
            </button>
          </div>
        ))}
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default AlbumsPage;
