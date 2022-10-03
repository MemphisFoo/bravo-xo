import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import NavBar from "./components/NavBar"
import Profile from "./components/Profile"
import Shows from "./components/Shows"
// import ShowsProfiles from "./components/ShowCards"
// import Filter from "./components/Filter"
import EditProfileForm from "./components/EditProfileForm"
function App() {
  const [pronouns, setPronouns] = useState([]);
  const [sexualities, setSexualities] = useState([]);
  const [shows, setShows] = useState([])
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

  // $Promise.all code
  useEffect(() => {
    getSelections()
  }, []);

  function getSelections() {
    const urls = ["/pronouns", "/sexualities", "/shows"]
    Promise.all(urls.map((url) => fetch(url)))
      .then((r) => Promise.all(r.map((r) => r.json())))
      .then((data) => {
        setPronouns(data[0])
        setSexualities(data[1])
        setShows(data[2])
      })
  }

  // function handleClick() {
  //   setShowProfiles(show.profiles)
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

  // console.log(currentUser);

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
            <LoginForm className="bg-black" isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} handleLogout={handleLogout} />
            <h1 className="bg-black">This is my login page</h1></Route>
          <Route exact path='/signup'>
            <SignupForm setCurrentUser={setCurrentUser} />
            <h1>I'm signing up</h1>
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          {currentUser && (<Route exact path="/profiles/:id/edit">
            <EditProfileForm currentUser={currentUser} sexualities={sexualities} pronouns={pronouns} shows={shows} />
          </Route>)}
          {/* <Filter
            search={search}
            onSearchChange={setSearch}/> */}
          <Route exact path="/shows">
            <Shows shows={shows} />
          </Route>
          {/* <Route exact path="/shows/profiles">
            <ShowsProfiles showProfiles={showProfiles} setShowProfiles={setShowProfiles} />
          </Route> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
/* <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} /> */