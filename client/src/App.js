import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import LoginForm from "./components/LoginForm" 
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
        setIsAuthenticated(true)
        setIsLoggedIn(true)
      });
    }
  })
}, []);

// function handleLogin(currentUser) {
//   setCurrentUser(currentUser)
// }

// function handleLogout(currentUser) {  
//   setCurrentUser(null)}

return (
    <BrowserRouter>
      <NavBar isloggedIn={isLoggedIn}/>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <h1>Home</h1>
        </Route>
        <Route path='/login'>
          <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/signup'>
            <SignupForm setCurrentUser={setCurrentUser}/>
            </Route>
            <Route path="/profile">
              <h1>Profile</h1>
            </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
