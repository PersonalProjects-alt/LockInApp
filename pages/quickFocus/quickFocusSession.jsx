import React, { useState } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from './styles/quickFocusSessionStyle.ts'
import { Picker, DatePicker } from 'react-native-wheel-pick';
import LinearGradient from 'react-native-linear-gradient';
function quickFocusSession() {
  const insets = useSafeAreaInsets()
  const [hours, setHours] = useState('00')
  const [minutes, setMinutes] = useState('01')
  const [seconds, setSeconds] = useState('00')

  const hoursData = Array.from({ length: 100 }, (_, i) => String(i).padStart(2, '0'));
  const minutesData = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));
  const secondsData = Array.from({ length: 60 }, (_, i) => String(i).padStart(2, '0'));

  const [defaultTimes, setDefualtTimes] = useState([
    { id: 0, name: '20 min', value: 20 },
    { id: 1, name: '20 min', value: 20 },
    { id: 2, name: '20 min', value: 20 },
  ])

  const renderDefaultTimes = () => {
    return (
      <View style={styles.defaultTimesViewContainer}>
        {defaultTimes.map((item) => (
          <TouchableOpacity
            key={item.id}
            >
            <LinearGradient colors={['#2A2A2A', '#19191B']} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} style={styles.defaultTimesContainer}>
              <Text style={styles.defaultTimesText}>{item.name}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <ScrollView style={[styles.background, { paddingTop: insets.top }]}>
        <View style={styles.header}>
          <Text style={styles.header_text}>Focus Session</Text>
          {/* <View style={styles.pickerContainer}>

            <View style={styles.pickerColumn}>
              <Picker
                style={{ backgroundColor: 'black', width: '100%', height: 215 }}
                textSize={30}
                selectTextColor='white'
                isShowSelectLine={false}
                isCyclic={true}
                selectedValue={hours}
                pickerData={hoursData}
                onValueChange={setHours}
              />
            </View>

            <Text style={styles.separator}>:</Text>

            <View style={styles.pickerColumn}>
              <Picker
                style={{ backgroundColor: 'black', width: '100%', height: 215 }}
                textSize={30}
                selectTextColor='white'
                isShowSelectLine={false}
                isCyclic={true}
                selectedValue={minutes}
                pickerData={minutesData}
                onValueChange={setMinutes}
              />
            </View>

            <Text style={styles.separator}>:</Text>

            <View style={styles.pickerColumn}>
              <Picker
                style={{ backgroundColor: 'black', width: '100%', height: 215 }}
                textSize={30}
                selectedValue={seconds}
                selectTextColor='white'
                isShowSelectLine={false}
                isCyclic={true}
                pickerData={secondsData}
                onValueChange={setSeconds}
              />
            </View>
          </View> */}
          {/* {renderDefaultTimes()}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => console.log('Start')}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default quickFocusSession