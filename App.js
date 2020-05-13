import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import store from './src/store'
import {Provider} from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './src/routes/routes';

const Stack = createStackNavigator()

export default class App extends React.Component{

  render(){
    return (
      <NavigationContainer>
        <View style={styles.statusBar}/>
        <Provider store={store}>
          <Stack.Navigator initialRouteName='Home'>
            {routes.map((route, index) => (
              <Stack.Screen key={index} name={route.name} options={route.options} component={route.component} />
            ))}
          </Stack.Navigator>
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#055',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  statusBar: {
    backgroundColor: "transparent",
    height: Constants.statusBarHeight,
  },
});
