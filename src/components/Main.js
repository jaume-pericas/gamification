import React, {useContext} from "react";
import {AppContext} from "../AppContextProvider";
import {Login} from "./Login.js"
import {Dashboard} from "./Dashboard.js"
import {Home} from "./Home.js"
import {
    Routes as Switch,
    Route,
    Navigate
  } from "react-router-dom";

export const Main = () => {
    const {appState}  = useContext(AppContext);
    const {access_token, error} = appState;

    return ( 
        <Switch>
        <Route path="/login" element={access_token != '' ? <Navigate to="/dashboard" replace /> : <Login  />} >
          
        </Route>
        <Route path="/dashboard" element={access_token == '' ? <Navigate to="/" replace /> : <Dashboard  />} >
          
        </Route>
        <Route path="*" element={<Home  />} ></Route>
      </Switch>
      )
}