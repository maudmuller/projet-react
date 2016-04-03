import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

window.__DEVTOOLS__ = !(process.env.NODE_ENV === 'production');
import { combineReducers } from "redux"
import { Provider } from "react-redux"
import createStore from "app/redux/createStore"
import * as reducers from "app/reducers"
const store = createStore(combineReducers(reducers))

import App from "./App"
import PageHome from "PageHome"
import PageArtist from "PageArtist"
import PageDiscover from "PageDiscover"
import PageNotFound from "PageNotFound"

let devtools = null
if (__DEVTOOLS__) {
    devtools = (
      <DevTools store={store}/>
    )
}


export default class Routes extends Component {

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="artist/:artistId(/:artistName)" component={PageArtist}/>
            <Route path="discover" component={PageDiscover}/>
            <IndexRoute component={PageHome} />
        </Route>
        <Route path="*" component={PageNotFound}/>
      </Router>
    )
  }
}
