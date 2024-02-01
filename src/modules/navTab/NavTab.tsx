import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();
import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';

import Home from '../home/Home';
import Shopping from '../shopping/Shopping';
import Message from '../message/Message';
import Mine from '../mine/Mine';
import icon_tab_publish from '../../assets/icon_tab_publish.png';

export default () => {
  const TabBar = ({state, descriptors, navigation}: any) => {
    const {routes, index} = state;
    const publish = () => {
      launchImageLibrary(
        {
          mediaType: 'photo',
          quality: 1,
          includeBase64: true,
        },
        (res: ImagePickerResponse) => {
          const {assets} = res;
          if (!assets?.length) {
            console.log('选择图片失败');
            return;
          }
          const {uri, width, height, fileName, fileSize, type} = assets[0];
          console.log(`uri=${uri}, width=${width}, height=${height}`);
          console.log(
            `fileName=${fileName}, fileSize=${fileSize}, type=${type}`,
          );
        },
      );
    };

    return (
      <View style={styles.tabContainer}>
        {routes.map((route: any, i: number) => {
          const {options} = descriptors[route.key];
          const title = options.title;
          const isFocused = index === i;
          if (i === 2) {
            return (
              <TouchableOpacity style={styles.tabItem} onPress={publish}>
                <Image style={styles.tabPublish} source={icon_tab_publish} />
              </TouchableOpacity>
            );
          }
          return (
            <TouchableOpacity
              key={title}
              style={styles.tabItem}
              onPress={() => {
                navigation.navigate(route.name);
              }}>
              <Text
                style={{
                  fontSize: isFocused ? 18 : 16,
                  color: isFocused ? '#333' : '#999',
                  fontWeight: isFocused ? 'bold' : 'normal',
                }}>
                {title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  return (
    <View style={styles.root}>
      <BottomTab.Navigator tabBar={props => <TabBar {...props} />}>
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{title: 'Home', headerShown: false}}></BottomTab.Screen>
        <BottomTab.Screen
          name="Shopping"
          component={Shopping}
          options={{title: 'Shopping', headerShown: false}}></BottomTab.Screen>
        <BottomTab.Screen
          name="Publish"
          component={Shopping}
          options={{title: 'Publish', headerShown: false}}></BottomTab.Screen>
        <BottomTab.Screen
          name="Message"
          component={Message}
          options={{title: 'Message', headerShown: false}}></BottomTab.Screen>
        <BottomTab.Screen
          name="Mine"
          component={Mine}
          options={{title: 'Mine', headerShown: false}}></BottomTab.Screen>
      </BottomTab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
  },
  tabContainer: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabItem: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabPublish: {
    width: 56,
    height: 40,
    resizeMode: 'contain',
  },
});
