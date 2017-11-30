import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import ScrollMemory from 'react-router-scroll-memory';


// import registerServiceWorker from './registerServiceWorker';

// STYLES
import 'normalize.css';
import './styles/index.css';
import './styles/media_queries.css';

// COMPONENTS
import Nav from './components/nav';
import Footer from './components/footer';

// CONTAINERS
import Project from './containers/project';
import Home from './containers/home';

// REDUCER
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);




ReactDOM.render(
  

  <Provider store={createStoreWithMiddleware(reducers)}>

    <Router>
    
      <div>
      <ScrollMemory />
        <Nav />


          <Switch>
            <Route path="/projects" component={ Project } />
            <Route path="/" component={ Home } />
          </Switch>
        
        <Footer />
      </div>
    </Router>

  </Provider>
, document.getElementById('root'));
// registerServiceWorker();
