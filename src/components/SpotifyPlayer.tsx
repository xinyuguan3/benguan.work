import React from 'react';
import './SpotifyPlayer.css';

const SpotifyPlayer = () => {
  return (
    <div className="spotify-player">
      <iframe
        src="https://open.spotify.com/embed/playlist/6pgsQPahVG8fAGyh9rlS4y?utm_source=generator"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify Playlist"
      />
    </div>
  );
};

export default SpotifyPlayer; 