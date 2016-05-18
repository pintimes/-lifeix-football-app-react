/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 //忽略warning 
 console.ignoredYellowBox = ['Warning: ReactNative.createElement'];

import React from 'react';
import {
  StyleSheet,
    View,
    Component,
    Text
} from 'react-native';


import ScrollMenu from '../components/ScrollMenu';
import Content from '../components/Content';
import Settings from './settings'
import NavigationBar from 'react-native-navigation-bar';
import SideMenu from 'react-native-side-menu'

class Home extends Component {
        state = {
        isOpen: false,
      };
	render() {

              const menu = <Settings />
		return (
                <SideMenu menu={menu} isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenuState(isOpen)}>
                
                <View style={styles.container}>
                    {this.renderNavigationBar()}
                    <ScrollMenu/>
                    <View>
                      <Content navigator={this.props.navigator} />
                    </View>
                </View>
                </SideMenu>
              );
	}

	renderLoadingView() {
            return (
              <View style={styles.container}>
        	    <Text style={styles.title}>
        	      主页
        	    </Text>
        	  </View>
            );
	}

  renderNavigationBar(){
    return (
          <NavigationBar 
              title={'中国足球网'}
              height={30}
              titleColor={'#FCD116'}
              backgroundColor={'#CE1126'}
              leftButtonIcon={require('../imgs/start_hightlight.png')}
              //leftButtonTitle={'back'}
              //leftButtonTitleColor={'#fff'}
              onLeftButtonPress={()=>this.toggle()} 
              //rightButtonIcon={require('../imgs/start_hightlight.png')}
              //rightButtonTitle={'中国足球网'}
              //rightButtonTitleColor={'#CE1126'}
              //onRightButtonPress={this.onForwardHandle}
          />
      );
  }
  toggle() {
    this.setState({ isOpen:!this.state.isOpen});


  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onForwardHandle(){

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  tabBar:{
    backgroundColor: '#CE1126',
  },
  text: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});
module.exports = Home
