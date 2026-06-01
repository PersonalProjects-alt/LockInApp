import React from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView } from 'react-native';
import { styles } from './styles/home.ts'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import StreakCalendar from '../../components/streak_component/streaks_calendar.jsx';
import SwipeCards from '../../components/swipableCards/swipeCards.jsx';
import LinearGradient from 'react-native-linear-gradient';
import ScreenOnTime from '../../components/screenOnTime/screenOnTime.jsx'

function home() {
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

  return (
    <SafeAreaProvider>
      <ScrollView style={[styles.background, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Hello, Dare</Text>
          <Text style={styles.subHeader_text}>{formatDate(new Date())}</Text>
        </View>
        <View>
          <StreakCalendar />
          <SwipeCards />
          <ScreenOnTime/>
        </View>
        


      </ScrollView>
    </SafeAreaProvider>
  )
}

export default home