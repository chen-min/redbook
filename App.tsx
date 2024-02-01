import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Welcome from './src/modules/welcome/Welcome';
import Login from './src/modules/login/Login';
import Home from './src/modules/home/Home';
import NavTab from './src/modules/navTab/NavTab';

const Stack = createStackNavigator();
// 验证表单方法
function App(): JSX.Element {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{cardStyle: {elevation: 1}}}>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="NavTab"
            component={NavTab}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
