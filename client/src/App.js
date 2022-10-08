import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Shows from "./components/Shows";
import ShowUsers from "./components/ShowUsers";
// import ShowsProfiles from "./components/ShowCards"
// import Filter from "./components/Filter"
import EditProfileForm from "./components/EditProfileForm";
function App() {
  const [pronouns, setPronouns] = useState([]);
  const [sexualities, setSexualities] = useState([]);
  const [shows, setShows] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [currentUser, setCurrentUser] = useState({profile:{},});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({});
  const [imageData, setImageData] = useState("");
  const [profileData, setProfileData] = useState({})

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setCurrentUser(user);
          setCurrentProfile(user.profile);
          setIsAuthenticated(true);
          setIsLoggedIn(true);
        });
      }
    });
  }, []);

  function handleImageUrl(image_url) {
    const newProfObj = { ...currentProfile };
    newProfObj.image_url = image_url;
    setCurrentProfile(newProfObj);
  }

  function handleUpdateProfile(profileData) {
    const newProfObj = { ...currentProfile };
    (newProfObj.first_name = profileData.first_name)
    (newProfObj.last_name = profileData.last_name)
    (newProfObj.bio = profileData.bio)
    (newProfObj.show_id = profileData.show.id)
    (newProfObj.pronoun_id = profileData.pronoun.id)
    (newProfObj.sexuality_id = profileData.sexuality.id)
    (newProfObj.user_id = profileData.user.id)
  }

  function handleImgSubmit(e) {
    e.preventDefault();
    const pic = new FormData();
    pic.append("image", imageData.image);
    pic.append("id", currentProfile.id);
    // pic.append('id', profile.id)

    fetch("/update_image", {
      method: "PATCH",
      body: pic,
    })
      .then((res) => res.json())
      .then((pic) => handleImageUrl(pic.image_url));
  }

  // $Promise.all code
  useEffect(() => {
    getSelections();
  }, []);

  function getSelections() {
    const urls = ["/pronouns", "/sexualities", "/shows"];
    Promise.all(urls.map((url) => fetch(url)))
      .then((r) => Promise.all(r.map((r) => r.json())))
      .then((data) => {
        setPronouns(data[0]);
        setSexualities(data[1]);
        setShows(data[2]);
      });
  }
  //  $ ACTIONCABLE FUNCTIONS
  // function updateAppStateRoom(newRoom) {
  // 	setCurrentRoom({
  // 		...currentRoom,
  // 		chatroom: newRoom,
  // 		users: newRoom.users,
  // 		messages: newRoom.messages,
  // 	})
  // 	setMessages(newRoom.messages)
  // }

  // function handleUpdateCurrentUser(user) {
  // 	setCurrentUser(user)
  // }

  // function handleCurrentRoom(result) {
  // 	return {
  // 		chatroom: result.data.attributes,
  // 		users: result.data.attributes.users.data,
  // 		messages: result.data.attributes.messages,
  // 	}
  // }

  // function handleClick() {
  //   setShowProfiles(show.profiles)
  // }
  // function handleLogin(currentUser) {
  //   setCurrentUser(currentUser)
  // }

  const history = { useHistory };
  const handleLogout = () => {
    fetch("/logout", { method: "DELETE" }).then((res) => {
      if (res.ok) {
        setCurrentUser(null);
        setIsLoggedIn(false);
        history.push("/");
      }
    });
  };

  // console.log(currentUser);

  return (
    <BrowserRouter>
      <NavBar
        className="App"
        currentProfile={currentProfile}
        imageData={imageData}
        handleLogout={handleLogout}
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
      />
      <div>
        <Switch>
          <Route exact path="/">
            {/* <h1>Welcome, {currentUser.username}!</h1> */}
          </Route>
          <Route exact path="/login">
            <LoginForm
              className="bg-black"
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setCurrentUser={setCurrentUser}
              handleLogout={handleLogout}
            />
            {/* <h1>Welcome, {currentUser.username}!</h1> */}
          </Route>
          <Route exact path="/signup">
            <SignupForm setCurrentUser={setCurrentUser} />
            <h1>I'm signing up</h1>
          </Route>
          <Route exact path="/profiles/:id">
            <Profile
              handleUpdateProfile={handleUpdateProfile}
              currentUser={currentUser}
              currentProfile={currentProfile}
            />
          </Route>
          {currentUser && (
            <Route exact path="/profiles/:id/edit">
              <EditProfileForm
                // currentProfile={currentProfile}
                sexualities={sexualities}
                pronouns={pronouns}
                shows={shows}
                handleUpdateProfile={handleUpdateProfile}
                handleImgSubmit={handleImgSubmit}
                currentUser={currentUser}
              />
            </Route>
          )}
          {/* <Filter
            search={search}
            onSearchChange={setSearch}/> */}
          <Route exact path="/shows">
            <Shows shows={shows} />
          </Route>
          <Route exact path="/shows/:id">
            <ShowUsers shows={shows} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
/* <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} /> */
