import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Main from "./pages/Main/";
import Donate from "./pages/Donate";
import About from "./pages/About/";
import Impact from "./pages/Impact/";
import Blog from "./pages/Blog/";
import AllBlogs from "./pages/AllBlogs";
import Contact from "./pages/Contact";
import FullBlogPost from "./pages/FullBlogPost";
// import HopePearls from "./pages/HopePearls";
import Gallery from "./pages/Gallery";
import Programs from "./pages/Programs";
import Admin from "./pages/Admin"
import Login from "./pages/Login"

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
          <Route exact path="/Gallery" component={Gallery} />
          <Route exact path="/Blog/" component={Blog} />
          <Route exact path="/AllBlogs/" component={AllBlogs} />
          <Route exact path="/FullBlogPost/:id" component={FullBlogPost} />
          <Route exact path="/Programs" component={Programs} />
          {/* <Route exact path="/blog" component={Wizard} /> */}
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Loggedin" component={() => <h1 style={{textAlign: 'center'}}>Logged In Successfully</h1>} />
          <Route exact path="/Loggedout" component={() => <h1 style={{textAlign: 'center'}}>Logged Out Successfully</h1>} />
          <Route exact path="/Unauthorized" component={() => <h1 style={{textAlign: 'center'}}>You are not authorized to access this page</h1>} />
          <Route exact path="/Admin" component={Admin} />
          <Route exact path="/Private" component={PrivateRoute} />
          <Route exact path="/Login" component={Login} />

          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
