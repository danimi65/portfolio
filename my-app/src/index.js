import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Portfolio from './containers/Portfolio';

import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';


ReactDOM.render(
	<Router>
	<div>
		<div className="nav-div">
		<Link to="/">Home </Link> 
        <Link to="/about">| About</Link>
        <Link to="/contact"> | Contact</Link>
        <Link to="/portfolio"> | Portfolio</Link>

		</div>
	<Route exact path="/" component={ Home } />
  	<Route path="/about" component={ About } />
  	<Route path="/contact" component={ Contact } />
  	<Route path="/portfolio" component={ Portfolio } />
	</div>
	</Router>,
	 document.getElementById('root'));
registerServiceWorker();

