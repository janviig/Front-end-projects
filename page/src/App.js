import React from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import Newsletter from './newsletter';
import CardList from './CardList';
import Card from './Card';
import Feature from './feature';
import TutList from './TutList';
import FeatTut from './FeatTut';
import Tut from './Tut';
import Button from './button';
import Button2 from './button2';

function App() {
  return (
    <div className="App">
      <Header />

      {/* featured articles header 
       & article images*/}
       <Feature />
       <CardList />
       <Card />
       <Button />
       <br></br>
       <br></br>

      {/* featured tutorials header 
       & tutorial images*/}
       <br></br>
       <br></br>
       <FeatTut />
       <TutList />
       <Tut />
       <Button2 />
       <br></br>
       <br></br>
       
       <br></br>
       <br></br>
       <Newsletter />
       <br></br>
       <br></br>
       <Footer />
     
    </div>
  );
}

export default App;
