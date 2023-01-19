import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FirebaseContext } from "./store/firebaseContext";
import Context from './store/firebaseContext'
import firebase from "./firebase/config";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseContext.Provider value={{firebase}}>
  <Context>
    <App />
  </Context>
</FirebaseContext.Provider>
);