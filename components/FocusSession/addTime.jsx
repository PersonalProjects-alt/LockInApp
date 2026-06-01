import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles/addTimeStyle.ts'
import LinearGradient from 'react-native-linear-gradient';

function addTime({ label, time }) {
  return (
    <View style={styles.viewContainer}>
      <TouchableOpacity>
        <LinearGradient colors={['#2A2A2A', '#19191B']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
          <Text style={styles.headerText}>{label}</Text>
          <Text style={styles.timeText}>{time}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  )
}

export default addTime