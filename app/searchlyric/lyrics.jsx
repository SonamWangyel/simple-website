// components/Lyrics.js
import React, { useState } from 'react';

const Lyrics = () => {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');

  const fetchLyrics = async () => {
    try {
      const response = await fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      const data = await response.json();
      setLyrics(data.lyrics);
    } catch (error) {
      console.error('Error fetching lyrics:', error);
    }
  };

  return (
    <div>
      <h2 className='text-4xl  text-center text-blue-400 animate-pulse bottom-1.5'>
        Lyrics Finder
      </h2>
      <input className='text-black border-4 border-red-300 '
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input className='text-black border-4 border-red-300 text-right '
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button  
        className="border-4 border-white "
        onClick={fetchLyrics}
        >
        Get Lyrics
      </button>
      <div>
        <h3 className='text-center bottom-5'>Lyrics</h3>
        <pre className="text-amber-400 ">{lyrics}</pre>
      </div>
    </div>
  );
};

export default Lyrics;
