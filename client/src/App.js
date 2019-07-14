import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Main from "./pages/Main/";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import About from "./pages/About/";
import Impact from "./pages/Impact/";
import Blog from "./pages/Blog/";
import Gallery from "./pages/Gallery";
import Programs from "./pages/Programs";
import Resources from "./pages/Resources/";
import Admin from "./pages/Admin"
import PrivateRoute from './components/Auth/PrivateRoute'

// components
import Nav from "./components/Nav";
import Footer from "./components/Footer/"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Donate/" component={Donate} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Impact" component={Impact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/Blog/" component={Blog} />
          <Route exact path="/Resources" component={Resources} />
          <Route exact path="/programs" component={Programs} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/loggedin" component={() => <h1 style={{textAlign: 'center'}}>Logged In Successfully</h1>} />
          <Route exact path="/loggedout" component={() => <h1 style={{textAlign: 'center'}}>Logged Out Successfully</h1>} />
          <Route exact path="/unauthorized" component={() => <h1 style={{textAlign: 'center'}}>You are not authorized to access this page</h1>} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path='/private' component={PrivateRoute} />

          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
