import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home.jsx';
import LoginPage from './routes/LoginPage.jsx';
import CreateAccount from './routes/CreateAccount.jsx';
import LogoutPage from './routes/LogoutPage.jsx';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/createaccount' element={<CreateAccount />}/>

      <Route path='/logout' element={<LogoutPage />}/>
    </Routes>
  );
}

export default App;

 