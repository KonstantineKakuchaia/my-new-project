import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import LoginForm from "./components/loginForm/LoginForm";
import Main from "./pages/Main";
import RegistrationForm from "./components/registrationForm/RegistrationForm";
import BookingPage from "./components/BookingPage/BookingPage";
import ChosenHotel from "./components/chosenHotel/ChosenHotel";
import StaysPage from "./components/BookingPage/staysPage/StaysPage";
import FlyList from "./components/BookingPage/flyList/FlyList";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isLoggedIn);

  function handleLoginSuccess() {
    setIsLoggedIn(true);

    localStorage.setItem("isLoggedIn", "true");
  }

  function handleLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

  return (
    <Router>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Switch>
        <Route path="/login">
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </Route>
        <Route path="/registration" component={RegistrationForm} />
        <Route path="/chosen" component={ChosenHotel} />
        <Route path="/stays" component={StaysPage} />
        <Route path="/flylist" component={FlyList} />
        <Route path="/booking" component={BookingPage} />
        <Route path="/" component={Main} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
