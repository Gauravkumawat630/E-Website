

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './App.css'; // Import your custom CSS

 
import Signup from './components/Signup';
import Login from './components/Login';
import Abouts from './components/Abouts';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Header from './components/Header';

 import Footer from './components/Footer';
 import NotFoundPage from './components/NotFoundPage';

 


function App() {
  
  return (
    <Router>
      <Header />
      <Footer/>
     
      
{/* 
       <Layout>  */}
      <Routes>
            
        
              <Route path="/" element={<Home />} />
              <Route path="/abouts" element={<Abouts />} />
              <Route path="/Features" element={<Features />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/dashboard" element={<Dashboard />} />
             
              <Route
                    path="*"
                    element={<NotFoundPage />}
                />
    
    

   
    </Routes>
    </Router>
  );
}

export default App;