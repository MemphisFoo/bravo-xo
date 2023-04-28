import "./components/stylesheets/App.css";
import { useState, useEffect } from "react";
import { useHistory, BrowserRouter, Switch, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Shows from "./components/Shows";
import ShowUsers from "./components/ShowUsers";
import ShowTitles from "./components/ShowTitles"
// import Filter from "./components/Filter"
import EditProfileForm from "./components/EditProfileForm";
function App() {
  const [currentUser, setCurrentUser] = useState({ profile: {} });
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profiles, setProfiles] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const [pronouns, setPronouns] = useState([]);
  const [sexualities, setSexualities] = useState([]);
  const [shows, setShows] = useState([]);
  // const {first_name, last_name, bio, user_id, show_id, sexuality_id, pronoun_id,} = profile;
  const [profileData, setProfileData] = useState({});
  const [profilePicData, setProfilePicData] = useState({ profile_pic: null });

  const history = useHistory();

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
  // console.log(currentUser);

  //$Fetch Profiles
  useEffect(() => {
    fetch("/profiles")
      .then((r) => r.json())
      .then(setProfiles);
  }, [currentProfile]);
  // console.log(currentProfile)

  //$ EditProfileForm functions

  function handleUpdateProfilePicUrl(profile_pic_url) {
    const newProfileObj = { ...currentProfile };
    newProfileObj.profile_pic_url = profile_pic_url;
    setCurrentProfile(newProfileObj);
  }

  function handleUpdateProfile(profileData) {
    console.log(currentProfile);
    const newProfileObj = { ...currentProfile };
    newProfileObj.first_name = profileData.first_name;
    newProfileObj.last_name = profileData.last_name;
    newProfileObj.bio = profileData.bio;
    newProfileObj.user_id = profileData.user_id;
    newProfileObj.show_id = profileData.show_id;
    newProfileObj.pronoun_id = profileData.pronoun_id;
    newProfileObj.sexuality_id = profileData.sexuality_id;
    newProfileObj.sexuality = profileData.sexuality;
    newProfileObj.pronoun = profileData.pronoun;
    newProfileObj.show = profileData.show;
    setCurrentProfile(newProfileObj);
    setProfiles(profiles);
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
      <div id="backgroundDiv" className="defaultBackground"></div>
      <NavBar
        className="App"
        profile={currentProfile}
        // imageData={imageData}
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
              setCurrentProfile={setCurrentProfile}
            />
            {/* <h1>Welcome, {currentUser.username}!</h1> */}
          </Route>
          <Route exact path="/signup">
            <SignupForm
              setCurrentUser={setCurrentUser}
              setCurrentProfile={setCurrentProfile}
            />
          </Route>
          <Route exact path="/profiles/:id">
            <Profile
              handleUpdateProfile={handleUpdateProfile}
              currentUser={currentUser}
              currentProfile={currentProfile}
              // sexualities={sexualities}
              // pronouns={pronouns}
              // shows={shows}
            />
          </Route>
          {currentUser && (
            <Route exact path="/profiles/:id/edit">
              <EditProfileForm
                profile={currentProfile}
                profiles={profiles}
                setProfiles={setProfiles}
                sexualities={sexualities}
                pronouns={pronouns}
                shows={shows}
                onUpdateProfile={handleUpdateProfile}
                onUpdateProfilePicUrl={handleUpdateProfilePicUrl}
                currentUser={currentUser}
              />
            </Route>
          )}
          <Route exact path="/shows">
            <Shows shows={shows} />
          </Route>
          <Route exact path="/shows/:id">
            <ShowTitles 
            shows={shows} />
          </Route>
          {currentUser && (
            <Route exact path="/shows/:id/profiles">
              <ShowUsers
                shows={shows}
                profiles={profiles}
                setProfiles={setProfiles}
                currentprofile={currentProfile}
              />
            </Route>
          )}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/* <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} /> */

// $ UPDATE PROFILE FUNCTIONS NOT IN USE
// function handleUpdateProfile(profileData) {
//   const newProfObj = { ...currentProfile };
//   (newProfObj.first_name = profileData.first_name)
//   (newProfObj.last_name = profileData.last_name)
//   (newProfObj.bio = profileData.bio)
//   (newProfObj.show_id = profileData.show.id)
//   (newProfObj.pronoun_id = profileData.pronoun.id)
//   (newProfObj.sexuality_id = profileData.sexuality.id)
//   (newProfObj.user_id = profileData.user.id)
// }

// $ IMAGE SUBMISSION CODE NOT IN USE
// function handleImgSubmit(e) {
//   e.preventDefault();
//   const pic = new FormData();
//   pic.append("image", imageData.image);
//   pic.append("id", currentProfile.id);
//   // pic.append('id', profile.id)

//   fetch("/update_image", {
//     method: "PATCH",
//     body: pic,
//   })
//     .then((res) => res.json())
//     .then((pic) => handleImageUrl(pic.image_url));
// }

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
