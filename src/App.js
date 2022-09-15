//import logo from "./logo.svg";
import WelComeHeader from "./components/WelComeHeader";
import NavBar from "./components/NavBar";
import AboutPage from "./components/AboutPage";
import Experience from "./components/Experience";
import Certificate from "./components/Certificate";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Card from "./UI/Card";
//import RecentCV from "./components/RecentCV";

import classes from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { Route } from "react-router";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Card className={classes.appcontrol}>
            <WelComeHeader />
            <NavBar />
            <AboutPage />
            <Experience />
            <Certificate />
            <Skills />
            <Contact />
          </Card>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
