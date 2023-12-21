

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../lib/firebase';
import { searchGifs } from '../lib/giphy';
import SignInAndSignUpButton from '../lib/components/buttons';
import '../../pages/styles/styles.css';
import '../../pages/styles/styles/index.css';

export default function Home() {
  const [user] = useAuthState(auth);
  const [query, setQuery] = useState('');
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const results = await searchGifs(query);
      setGifs(results);
      setPage(1);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    if (query) {
      handleSearch();
    }
  }, [query]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="container">
      <header>
        <h1>Giphy Search Web Application</h1>
      </header>
      <main>
        {!user ? (
          <div className="auth-buttons">
            <SignInAndSignUpButton href="/signin" label="Sign In" />
             <div className="spacer"></div>
              <SignInAndSignUpButton href="/signup" label="Sign Up" />
              <div className="spacer"></div>
              <SignInAndSignUpButton onClick={handleSignInWithGoogle} label="Sign In With Google" />
          </div>
        ) : (
          <div>
            <p className="welcome-message">Welcome, {user.displayName}!</p>
            <button onClick={() => auth.signOut()} className="auth-button">
              Sign Out
            </button>
            <div className="search-container">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search term"
                className="search-input"
              />
              {loading ? (
                <div className="loading-spinner"></div>
              ) : (
                <button onClick={handleSearch} className="search-button">
                  Search GIFs
                </button>
              )}
            </div>
            <div className="gifs-container">
              <div className="gifs-inner-container">
                {gifs.slice((page - 1) * 5, page * 5).map((gif, index) => (
                  <div key={gif.id} className="gif-item">
                    <img src={gif.images.fixed_height.url} alt="GIF" className="gif-image" />
                    <div className="gif-index">{index + 1}</div>
                  </div>
                ))}
              </div>
            </div>
            {gifs.length > 5 && (
              <div className="pagination-buttons">
                {[...Array(Math.ceil(gifs.length / 5)).keys()].map((pageNum) => (
                  <button
                    key={pageNum + 1}
                    onClick={() => handlePageChange(pageNum + 1)}
                    className={pageNum + 1 === page ? 'active' : ''}
                  >
                    {pageNum + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
      
    </div>
  );
}
