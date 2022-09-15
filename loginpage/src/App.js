import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home.jsx';
import LoginPage from './routes/LoginPage.jsx';
import CreateAccount from './routes/CreateAccount.jsx';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/createaccount' element={<CreateAccount />}/>
    </Routes>
  );
}

export default App;

 