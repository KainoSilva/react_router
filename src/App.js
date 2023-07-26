import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UsersPage from './components/UsersPage';
import AlbumsPage from './components/AlbumsPage';
import PhotosPage from './components/PhotosPage';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Router App</h1>
      </header>
      <nav>
        <div className="container">
          <Link to="/">Users</Link>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/users/:userId/albums" element={<AlbumsPage />} />
          <Route path="/albums/:albumId/photos" element={<PhotosPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
