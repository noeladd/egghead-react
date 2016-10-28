const React = require('react');
const Main = require('../components/main');
const Home = require('../components/home');
const Router = require('react-router');
const Route = Router.Route;
const IndexRoute = Router.IndexRoute;
import { hashHistory } from 'react-router'


module.exports = (
  <Route  history ={hashHistory} path="/" component={Main}>
    
    <IndexRoute component={Home} />
  </Route>
)

