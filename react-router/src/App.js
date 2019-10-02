import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav'
import AddPerson from './components/AddPerson'
import Person from './components/Person'
import Update from './components/Update'

function App() {


  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/add" exact component={AddPerson} />
          <Route path="/person" exact component={Person} />
          <Route path="/update" exact component={Update} />
        </Switch>

      </div>
    </Router>
  );
}




const obj = {
  name: "monir",
  hobbies: ['a', 'b', 'c'],
  location: {
    address: "abc",
    city: "Mirpur"
  }
}
const home = () => {
  return (
    <div className="text-center mt-5">
      {obj.location.city === "Mirpur" ? <h1>Home Page</h1> : <h1>Wrong Place</h1>}
    </div>
  )
}

export default App;
