import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Link, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Support from './Pages/Support/Support';
import Convert from './Pages/Convert/Convert';

function App() {
  return (

   <div className='h-screen w-screen bg-black'>
      <Header /> 
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='support' element={<Support />} />
        <Route path='convert' element={<Convert />} />
      </Routes>
     </Router>
   </div>
  );  
}

export default App;