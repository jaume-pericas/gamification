import './App.css';
import Header from "./layout/Header"
import {AppProvider} from "./AppContextProvider";
import {Main} from "./components/Main.js"

import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </Router>
  );
}

export default App;
