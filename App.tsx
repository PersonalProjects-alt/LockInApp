/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View, Text, Image } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Home from './pages/home/home'
import addFocusSession from './pages/addFocus/addFocusSession';
import quickFocusSession from './pages/quickFocus/quickFocusSession'
import Progress from './pages/progress/progress'
import Onboarding from './components/onboarding/onboarding'
import SignIn from './components/onboarding/sign_in_screen'
import SignUp from './components/onboarding/sign_up_screen'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User from './assets/Icons/user.png';
import Plus from './assets/Icons/add.png'
import HourGlass from './assets/Icons/hourglass.png'
import Chart from './assets/Icons/chart.png'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaProvider>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#414141',
              position: 'absolute',
              bottom: 25,
              marginLeft: 45,
              marginRight: 45,
              gap: 10,
              borderColor: '#C3C3C3',
              borderWidth: 0.2,
              height: 60,
              borderRadius: 50,
              borderTopWidth: 0,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 10,
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
                  <Image source={User} style={[styles.iconImageStyles, { tintColor: focused ? '#FFFFFF' : '#605D5D' }]} />
                </View>
              )
            }}
          />

          <Tab.Screen
            name="Progress"
            component={Progress}
            options={{
              tabBarIcon: ({ focused }) => (
                <View>
                  <Image source={Chart} style={[styles.iconImageStyles, { tintColor: focused ? '#FFFFFF' : '#605D5D' }]} />
                </View>
              )
            }}
          />

          <Tab.Screen
            name="FocusSession"
            component={addFocusSession}
            options={{
              tabBarIcon: ({ focused }) => (
                <View>
                  <Image source={Plus} style={[styles.iconImageStyles, { tintColor: focused ? '#FFFFFF' : '#605D5D' }]} />
                </View>
              )
            }}
          />

          <Tab.Screen
            name="QuickFocusSession"
            component={quickFocusSession}
            options={{
              tabBarIcon: ({ focused }) => (
                <View>
                  <Image source={HourGlass} style={[styles.iconImageStyles, { tintColor: focused ? '#FFFFFF' : '#605D5D' }]} />
                </View>
              )
            }}
          />


        </Tab.Navigator>
    </SafeAreaProvider>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Onboarding'
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="Onboarding" component={Onboarding}/>
          <Stack.Screen name="SignIn" component={SignIn}/>
          <Stack.Screen name="SignUp" component={SignUp}/>
          <Stack.Screen name="MainTabs" component={MainTabs}/>
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
