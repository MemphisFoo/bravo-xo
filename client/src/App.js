import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { useHistory } from 'react-router-dom';
import LoginForm from "./components/LoginForm" 
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import Profile from "./components/Profile"

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
const history = {useHistory}
const handleLogout = () => {
  fetch("/logout", {method:"DELETE"})
  .then((res) => {
    if(res.ok) {
      setCurrentUser(null);
      setIsLoggedIn(false);
      history.push("/")
    }
  });
};

return (
    <BrowserRouter>
      <NavBar handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <h1>Landing Page</h1>
        </Route>
        <Route exact path='/login'>
          <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} handleLogout={handleLogout}/>
          <h1>This is my login page</h1></Route>
          <Route exact path='/signup'>
            <SignupForm setCurrentUser={setCurrentUser}/>
            <h1>I'm signing up</h1>
            </Route>
            <Route exact path="/profile">
              <Profile currentUser={currentUser}/>
            </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
