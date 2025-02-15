/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
    View,
    Component,
    Text,
    Platform,
    Dimensions,BackAndroid
} from 'react-native';


import Settings from './settings'
import SideMenu from 'react-native-side-menu'
import {NavBar, NavBarModal,NavBarLeft} from '../common/NavBar';
import Content from '../components/Content';
import TestList from '../components/TestList';
import Player from '../components/Player';
import TopGame from '../components/topgame/topGameList'

class Home extends Component {
        state = {
        isOpen: false,
      };
      constructor(props) {
        super(props);
      }

     
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }
  //Android back 
  onBackAndroid = () => {
    const nav = this.props.navigator;
    const routers = nav.getCurrentRoutes();

    console.log("------BackAndroid");

    if (routers.length > 1) {
      nav.pop();
      return true;
    }
    return false;
  };

	render() {

              const menu = <Settings navigator={navigator} />
		return (
              <View style={styles.container}>
                <SideMenu menu={menu} isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenuState(isOpen)}>
                 <NavBarLeft title={this.props.title||'中国足球'} onPress={()=>this.toggle()} />
                    <View style = {styles.content}>
                      {this.renderContent()}
                    </View>
                </SideMenu>
                </View>
              );
	}

  renderNavigationBar(){
    return (
        <View />
      );
  }

  renderContent(){
    const name = this.props.componentName||'home';
    switch (name) {
      case 'home' || 'news':
        return <Content />;
      case 'test':
        return <TestList />;
      case 'player':
        return <Player />;
      case 'topgame':
        return <TopGame />; 
      default:
            return <Content />;

    }
  }


  toggle() {
    this.setState({ isOpen:!this.state.isOpen});
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  content: {
    height: Dimensions.get('window').height,
    backgroundColor: '#fff'
  }
});
module.exports = Home;
