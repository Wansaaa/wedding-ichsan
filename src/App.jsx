import React, { useState, useEffect } from 'react';
import PreLoader from './components/Preloader';
import Header from './components/Header';
import Couple from './components/Couple';
import Event from './components/Event';
import Address from './components/Address';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <div className="animate__animated animate__fadeIn">
          <Header />
          <main>
            <Couple />
            <Event />
            <Address />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
