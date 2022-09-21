import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginForm from "./components/LoginForm" 
import SignupForm from "./components/SignupForm"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
        setIsAuthenticated(true)
      });
    }
  })
}, []);

function handleLogin(currentUser) {
  setCurrentUser(currentUser)
}

function handleLogout(currentUser) {  
  setCurrentUser(null)}

return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path='/testing'>
          <h1> Test Route</h1>
        </Route>
        <Route path='/login'>
          <LoginForm setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/signup'><SignupForm setCurrentUser={setCurrentUser}/></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
