"use client"
import Lyrics from './lyrics';

const Home = () => {
  return (
    <div>
      <h1 className='text-6xl text-center text-fuchsia-300 underline animate-bounce'>Welcome to My Lyrics Website</h1>
      <Lyrics />
    </div>
  );
};

export default Home;
