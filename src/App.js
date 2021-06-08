import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "./history";
import UserProvider from "./contexts/UserProvider";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import MenuBar from "./components/menus/MenuBar";
import HowItWorks from "./components/HowItWorks.component"
import Navbar from "./components/navbar.component"
import AboutUs from "./components/AboutUs.component"
import BookList from "./components/books-list.component";
import EditBook from "./components/edit-book.component";
import CreateBook from "./components/create-book.component";
import CreateUser from "./components/create-user.component";
import Footer from "./components/footer.component"

function App() {
  return (
    <Router history={history}>
      <div className="container">
        <Navbar />
        <br />
        <AboutUs></AboutUs>
        <br/>
        <Route path="/" exact component={BookList} />
        <Route path="/edit/:id" component={EditBook} />
        <Route path="/create" component={CreateBook} />
        <Route path="/user" component={CreateUser} />
        <Route path="/about" component={HowItWorks} />
        <UserProvider>
                <Route path="/login" component={MenuBar} />
                <Route path="/profile" component={Profile} />
            </UserProvider>
            <Route path="/login" exact component={Home} />
        <br />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;