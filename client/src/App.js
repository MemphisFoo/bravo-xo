import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import Profile from "./components/Profile"
// import Filter from "./components/Filter"
import EditProfileForm from "./components/EditProfileForm"
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [search, setSearch] = useState("")

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





  // function handleUpdatedProfile(updatedProfile){
  //   const updatedProfile
  // }



  // function handleLogin(currentUser) {
  //   setCurrentUser(currentUser)
  // }
  const history = { useHistory }
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setCurrentUser(null);
          setIsLoggedIn(false);
          history.push("/")
        }
      });
  };

  console.log(currentUser);

  return (
    <BrowserRouter>
      <NavBar currentUser={currentUser} handleLogout={handleLogout} isLoggedIn={isLoggedIn} />
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <h1>*I want this to show results of users within 5 miles of the user*
              <br />
              <br />Let's find your Bravo-mate</h1>
          </Route>
          <Route exact path='/login'>
            <LoginForm isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} handleLogout={handleLogout} />
            <h1>This is my login page</h1></Route>
          <Route exact path='/signup'>
            <SignupForm setCurrentUser={setCurrentUser} />
            <h1>I'm signing up</h1>
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/profiles/:id/edit">
            <EditProfileForm />
          </Route>
          {/* <Filter
            search={search}
            onSearchChange={setSearch}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
/* <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} /> */