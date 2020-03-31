import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/twitter">Twitter</Link></li>
              <li><Link to="/youtube">Youtube</Link></li>
              <li><Link to="/spotify">Spotify</Link></li>
              <li><Link to="/instagram">Instagram</Link></li>
            </ul>
        </div>
    );
};

export default Home;