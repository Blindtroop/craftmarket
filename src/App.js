import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/Home/Home';
import Hero from './components/hero/hero';  // Import the Hero component
import CardGrid from './components/Card grid/CardGrid';  // Import CardGrid correctly
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/login';
import Footer from './components/Footer/footer';  // Import Footer
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './components/firebase/config';

function ProtectedRoute({ children, isAdmin, user }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  const [user, loading] = useAuthState(auth); 
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const verifyAdmin = () => {
      if (user) {
        setIsAdmin(user.email && user.email.toLowerCase() === 'admin@gmail.com'); // Adjust admin email as necessary
      } else {
        setIsAdmin(false);
      }
      setChecking(false);
    };

    if (!loading) verifyAdmin();
  }, [user, loading]);

  if (checking || loading) return <div>Loading...</div>;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              
              <>
                <Hero /> {/* Hero section */}
                <Home /> {/* Home component below the hero */}
                {/* <CardGrid />  */}
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/admin" element={<Navigate to="/login" replace />} />
          <Route
            path="/Dashboard"
            element={
              <ProtectedRoute user={user} isAdmin={isAdmin}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer /> {/* Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
