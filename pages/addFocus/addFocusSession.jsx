import React from 'react'
import { styles } from './styles/addFocusSessionStyle.ts'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import AddTime from '../../components/FocusSession/addTime.jsx'
import BlockedApps from '../../components/FocusSession/blockedApps.jsx'
import BlockedTaskInfo from '../../components/FocusSession/blockedTaskInfo.jsx'
function addFocusSession() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaProvider>
      <ScrollView style={[styles.background, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Focus Task</Text>
          {/* <View style={styles.addTimeContainer}>
            <AddTime label="Start" time="11:00am" />
            <AddTime label="End" time="12:00" />
          </View> */}
          <BlockedApps />
          {/* <BlockedTaskInfo /> */}
          {/* <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => console.log('Cancel')}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyle} onPress={() => console.log('Start')}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default addFocusSession