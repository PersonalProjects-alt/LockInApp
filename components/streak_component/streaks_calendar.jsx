import React from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView } from 'react-native';
import { styles } from './streak_calendar.ts'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

function streaks_calendar() {

  const renderDates = (date) => {
    const today = new Date(); //todays date
    const currentDayOfMonth = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    //start of week
    const startOfWeek = new Date(today);
    startOfWeek.setDate(currentDayOfMonth - today.getDay());
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days.map((label, index) => {
      const dateInstance = new Date(startOfWeek);
      dateInstance.setDate(startOfWeek.getDate() + index);

      const dateNumber = dateInstance.getDate();
      const isToday =
        dateInstance.getDate() === currentDayOfMonth &&
        dateInstance.getMonth() === currentMonth;

      return (
        <View styles={{flexDirection: 'row', display: 'flex'}} key={index}>
          <View key={index} style={styles.calendar_container}>
            <Text style={[styles.calendar_day, isToday && styles.activeDateText]}>{label}</Text>
            <View style={[styles.dateCircle, isToday && styles.activeDateCircle]}>
              <Text style={[styles.dateText, isToday && styles.activeDateText]}>{dateNumber}</Text>
            </View>
          </View>
        </View>
      )
    });
  }

  return (
    <View style={styles.viewContainer}>
      <LinearGradient colors={['#2A2A2A', '#19191B']} style={styles.container} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }}>
        <Text style={styles.title}>Streak days</Text>
        <View style={styles.calendar_row}>
          {renderDates(new Date())}
        </View>
      </LinearGradient>
    </View>
  )
}

export default streaks_calendar