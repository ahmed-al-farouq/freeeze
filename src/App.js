import React from 'react';
import './sass/app.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Components/Nav';
import Home from './Components/HomePage/Home';
import About from './Components/About/about';
import Products from './Components/products/products';
import Blog from './Components/blog/blog';
import SinglePost from './Components/single-post/single-post';
import ContactUs from './Components/contact-us/contact-us';
import Footer from './Components/footer';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/products" component={Products}/>
          <Route path="/blog" component={Blog}/>
          <Route path="/single-post" component={SinglePost}/>
          <Route path="/contact-us" component={ContactUs}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
