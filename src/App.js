import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from '../src/components/Home/Home';

 const App = () => {
  return (
    <BrowserRouter>

    <div className="App">

      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      </Switch>
      
    </div>
    </BrowserRouter>
  )
}

export default App;
