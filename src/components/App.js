import { Route, Switch } from "react-router-dom";

import "../styles/App.scss";

// Components:

import Landing from "./Sections.js/Landing";
import About from "./Sections.js/About";

import Technologies from "./Sections.js/Technologies";
import Proyects from "./Sections.js/Proyects";
import Contact from "./Sections.js/Contact";
import Footer from "./Footer";
import Up from "./Up";

function App() {
  return (
    <div className="App">
      <main>
        <Landing />

        <Switch />
        <Route exact path="/about" component={About} />
        <Route exact path="/proyects" component={Proyects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="#" component={Landing} />

        <About />
        <Technologies />
        <Proyects />
        <Contact />
      </main>
      <Up />
      <Footer />
    </div>
  );
}

export default App;
