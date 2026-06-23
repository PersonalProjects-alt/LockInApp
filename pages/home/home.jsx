import React, { useState, useEffect } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, NativeModules, Pressable } from 'react-native';
import { styles } from './styles/home.ts'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import QuickFocusSessionComponent from '../../components/FocusSession/quickFocusSessionComponent.jsx'
import TodayPlan from '../../components/todayPlan/todayPlan.jsx'
import StreakCalendar from '../../components/streak_component/streaks_calendar.jsx';
import SwipeCards from '../../components/swipableCards/swipeCards.jsx';
import LinearGradient from 'react-native-linear-gradient';
import ScreenOnTime from '../../components/screenOnTime/screenOnTime.jsx'

import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

function home({ navigation }) {
  const insets = useSafeAreaInsets();
  const formatDate = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const dayName = days[date.getDay()];
    const dayOfMonth = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear();

    // Logic for the st, nd, rd, th suffix
    const getOrdinal = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    return `${dayName} ${getOrdinal(dayOfMonth)} ${monthName} ${year}`;
  };

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(true);
  const { CalendarModule } = NativeModules;
  const { AndroidAppsModule } = NativeModules;

  // Handle user state changes
  function handleAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <SafeAreaProvider>
      <ScrollView
        style={[styles.background, { paddingTop: insets.top }]}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Hello, {user.displayName}</Text>
          <Pressable style={{ backgroundColor: 'white' }} onPress={() => AndroidAppsModule.androidAppsEvent()}>
            <Text style={{ color: 'white' }}>Hellow World</Text>
          </Pressable>
          <Text style={styles.subHeader_text}>{formatDate(new Date())}</Text>
        </View>
        <View>
          <QuickFocusSessionComponent navigation={navigation} />
          <Text style={styles.todaysPlanText}>Today's Plan</Text>
          <TodayPlan />
          {/* <StreakCalendar />
          <SwipeCards />
          <ScreenOnTime/> */}
        </View>
        <Pressable style={{ backgroundColor: 'white' }} onPress={() => CalendarModule.createCalendarEvent('testName', 'testLocation')}>
          <Text style={{ color: 'white' }}>Hellow World</Text>
        </Pressable>



      </ScrollView>
    </SafeAreaProvider>
  )
}

export default home