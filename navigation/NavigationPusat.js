import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import ScreenUtama from '../screens/ScreenUtama';
import ScreenRank from '../screens/ScreenRank';
import ScreenProfil from '../screens/ScreenProfil';

const Tab = createBottomTabNavigator();

const NavigationPusat = props => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Read">
        <Tab.Screen
          name="Rank"
          component={ScreenRank}
          options={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({focused, color}) => {
              return <Icon name="ribbon-outline" size={23} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Read"
          component={ScreenUtama}
          options={{
            tabBarActiveTintColor: 'purple',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({focused, color}) => {
              return <Icon name="book-outline" size={23} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ScreenProfil}
          options={{
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor: 'gray',
            tabBarIcon: ({focused, color}) => {
              return <Icon name="person-outline" size={23} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default NavigationPusat;
