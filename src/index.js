import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom'
import NotFound from './pages/404'
import MoviesHome from './pages/Movies/Selection'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={MoviesHome} exact />
      <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
