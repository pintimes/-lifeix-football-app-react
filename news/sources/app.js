/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  StyleSheet,
  Navigator 
} from 'react-native';
import {Router, routerReducer, Route, Container, Animations, Schema} from 'react-native-redux-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import Welcome from './view/welcome';
import Home from './view/home';
import Detail from './view/detail';
import Settings from './view/settings';
import TestView from './view/testView';
import {NavBar, NavBarModal,NavBarLeft} from './common/NavBar';
import TestTip from './common/TestTip';
console.disableYellowBox=true;

let store = createStore(combineReducers({routerReducer}));

export default class App extends Component {
  constructor (props) {
    super(props)
  }
  
  render() {
    return this.renderRouter();
  }

  renderRouter(){
    return (
      <Provider store={store}>
              <Router>
                    <Schema name="default" sceneConfig={Animations.FlatFloatFromRight}/>
                    <Schema name="withoutAnimation" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBarLeft}  type="RESET"/>
                    <Route name="welcome" component={Welcome} initial={true} type="reset" />
                    <Route name="home" component={Home} schema="default" title="首页" />
                    <Route name="detail" component={Detail} schema="withoutAnimation" title="详情"/>
                    <Route name="settings" component={Settings} />
                    <Route name="testTip" component={TestTip} schema="popup" />
                    <Route name="testView" component={TestView} />
              </Router>
       </Provider> 
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#CE1126',
  },
});
