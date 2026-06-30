/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState, useEffect } from 'react'
import { createMMKV } from 'react-native-mmkv'
import { StatusBar, StyleSheet, useColorScheme, View, Text, Image } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets, } from 'react-native-safe-area-context';
import Home from './pages/home/home'
import addFocusSession from './pages/addFocus/newFocusSession';
import quickFocusSession from './pages/quickFocus/quickFocusSession'
import Progress from './pages/progress/progress'
import Onboarding from './components/onboarding/onboarding'
import SignIn from './components/onboarding/sign_in_screen'
import SignUp from './components/onboarding/sign_up_screen'
import QuickSession from './pages/quickSession/quickSession'
import ListApp from './pages/addFocus/listOfApps'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User from './assets/Icons/user.png';
import HomeIcon from './assets/Icons/home.png'
import FocusIcon from './assets/Icons/focus.png'
import moreIcon from './assets/Icons/more.png'
import Plus from './assets/Icons/add.png'
import HourGlass from './assets/Icons/hourglass.png'
import Chart from './assets/Icons/chart.png'

import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const storage = createMMKV()

function MainTabs() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#090B0A',
            position: 'absolute',
            bottom: 25,
            marginLeft: 70,
            marginRight: 70,
            gap: 1,
            borderColor: '#141414',
            borderWidth: 0.2,
            height: 60,
            borderRadius: 20,
            borderTopWidth: 0,
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 1,
            opacity: 0.9,

          },
          tabBarShowLabel: false,
          tabBarLabelStyle: {

          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={HomeIcon} style={[styles.iconImageStyles, { tintColor: focused ? '#FFFFFF' : '#605D5D' }]} />
              </View>
            )
          }}
        />

        {/* <Tab.Screen
            name="Progress"
            component={Progress}
            options={{
              tabBarIcon: ({ focused }) => (
                <View>
                  <Image source={Chart} style={[styles.iconImageStyles, { tintColor: focused ? '#FFFFFF' : '#605D5D' }]} />
                </View>
              )
            }}
          /> */}

        {/* <Tab.Screen
          name="NewFocusSession"
          component={addFocusSession}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={FocusIcon} style={[styles.iconImageStyles, { tintColor: focused ? '#FFFFFF' : '#605D5D' }]} />
              </View>
            )
          }}
        /> */}

        <Tab.Screen
          name="QuickFocusSession"
          component={quickFocusSession}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Image source={moreIcon} style={[styles.iconImageStyles, { tintColor: focused ? '#FFFFFF' : '#605D5D' }]} />
              </View>
            )
          }}
        />


      </Tab.Navigator>
    </SafeAreaProvider>
  );
}

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(true);
  let initalRoute = ''

  // Handle user state changes
  function handleAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null

  if (user){
     initalRoute = 'MainTabs'
  } else {
     initalRoute = 'Onboarding'
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>

        <Stack.Navigator
          initialRouteName={initalRoute}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="QuickSession" component={QuickSession} />
          <Stack.Screen name="ListApp" component={ListApp} />
          <Stack.Screen name="addFocusSession" component={addFocusSession} />
          <Stack.Screen name="MainTabs" component={MainTabs} />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  iconImageStyles: {
    width: 20,
    height: 20,
    marginTop: 20,

  }


});

export default App;
