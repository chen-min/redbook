import React, {useEffect} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import icon_logo_main from '../../assets/icon_main_logo.png';
import {load} from '../../utils/storage';
import UserStore from '../../stores/UserStore';

export default () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  useEffect(() => {
    setTimeout(() => {
      getUserInfo();
    }, 300);
  });

  const getUserInfo = async () => {
    const userInfo = await load('userInfo');
    if (!userInfo) {
      startLogin();
    } else {
      const parse = JSON.parse(userInfo);
      if (parse) {
        UserStore.setUserInfo(parse);
        startNavTab();
      } else {
        startLogin();
      }
    }
  };

  const startLogin = () => {
    navigation.replace('Login');
  };
  const startNavTab = () => {
    navigation.replace('NavTab');
  };

  return (
    <View style={styles.root}>
      <Image style={styles.logo_main} source={icon_logo_main} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo_main: {
    width: 200,
    height: 105,
    marginTop: 200,
    resizeMode: 'contain',
  },
  protocolLayout: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
  },
  labelText: {
    fontSize: 12,
    color: '#999',
    marginLeft: 6,
  },
  protocolTxt: {
    fontSize: 12,
    color: '#1020ff',
  },
});
