import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

import { Details } from './Details';
import { Home } from './Home';
import { Userpost } from './Userpost';
import { Footer } from './Footer'

function App() {
  return (

    <div className="App " style={{ width: "100%" }}>

      <BrowserRouter>
        <Nav />

        <Route exact path='/' component={Home} />
        <Route exact path='/viewpost/:userid' component={Userpost} />
        <Route exact path="/postdetail/:userid/:id" component={Details} />
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
