import './App.css';
import Header from "./layout/Header"
import {AppProvider} from "./AppContextProvider";
import {Main} from "./components/Main.js"
import {Helmet} from "react-helmet";

import {
  BrowserRouter as Router,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Gamificación</title>
          <meta name="description" content="Web para gestionar la gaminficación en una aula" />
          <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <AppProvider>
        <Header />
        <Main />
      </AppProvider>
    </Router>
  );
}

export default App;
