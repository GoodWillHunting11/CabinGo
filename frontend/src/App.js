import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Spots from './components/Spots';
import SpotsHost from './components/SpotsHost';
import OneSpot from './components/OneSpot';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Home from './components/Home';
import SpotsHostEdit from "./components/SpotsHostEdit";
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path ='/'>
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/spots'>
            <Spots />
          </Route>
          <Route exact path='/spots/host'>
            <SpotsHost />
          </Route>
          <Route exact path='/spots/:spotId'>
            <OneSpot />
          </Route>
          <Route exact path='/spots/:spotId/host'>
            <SpotsHostEdit />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
