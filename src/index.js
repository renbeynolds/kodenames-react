import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from "react-router-dom";
import App from './App';
import './index.scss';
import Kodenames from './Pages/Kodenames';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact path="/kodenames" component={Kodenames} />
            <App />
        </Switch>
    </Router>,
    document.getElementById("root")
);
