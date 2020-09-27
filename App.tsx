/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Block from './src/components/Block';
import MyButton from './src/components/MyButton';
import MyText from './src/components/MyText';

import CardScreen from './src/screens/CartScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchScreen from './src/screens/SearchScreen';
import Splash from './src/screens/SplashScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTab = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <Block color="#FD0014" direction="row">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options?.tabBarLabel ||
          options?.title ||
          route.name.replace('Screen', '');
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIcon = () => {
          if (route.name === 'HomeScreen') {
            return 'explore';
          }

          if (route.name === 'ProfileScreen') {
            return 'verified-user';
          }

          if (route.name === 'SearchScreen') {
            return 'search';
          }

          return 'shopping-cart';
        };

        return (
          <MyButton
            key={route.name}
            block={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Block padding={14} centered middle>
              <Block
                padding={8}
                direction="row"
                middle
                paddingHorizontal={12}
                borderRadius={20}
                color={isFocused ? 'rgba(255,159,243,0.3)' : '#FD0014'}>
                <MaterialIcons
                  name={getIcon()}
                  size={25}
                  color={isFocused ? '#fff' : '#222'}
                />
                {isFocused ? (
                  <MyText h6 color={isFocused ? '#fff' : '#222'}>
                    {label}
                  </MyText>
                ) : undefined}
              </Block>
            </Block>
          </MyButton>
        );
      })}
    </Block>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTab {...props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="CardScreen" component={CardScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTab">
        <Stack.Screen
          name="Splash"
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen
          name="LoginScreen"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="MainTab"
          options={{headerShown: false}}
          component={MainTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
