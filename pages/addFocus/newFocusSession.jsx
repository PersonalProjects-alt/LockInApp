import React, { useState } from 'react'
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  Pressable,
} from 'react-native'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import DateTimePicker from '@react-native-community/datetimepicker'
import { styles } from './styles/addFocusSessionStyle.ts'
import BlockedAppsComponent from '../../components/blockedApps/blockedAppsComponent.jsx'
import pencilIcon from '../../assets/Icons/pencil.png'

const days = [
  { label: 'M', value: 'Monday' },
  { label: 'T', value: 'Tuesday' },
  { label: 'W', value: 'Wednesday' },
  { label: 'T', value: 'Thursday' },
  { label: 'F', value: 'Friday' },
  { label: 'S', value: 'Saturday' },
  { label: 'S', value: 'Sunday' },
]


function NewFocusSession({navigation}) {
  const insets = useSafeAreaInsets()

  const createTime = (hour, minute) => {
    const date = new Date()
    date.setHours(hour, minute, 0, 0)
    return date
  }

  const formatTime = date => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
  }

  const [focusSessionName, setFocusSessionName] = useState('')
  const [selectedDays, setSelectedDays] = useState([])
  const [startTime, setStartTime] = useState(() => createTime(9, 0))
  const [endTime, setEndTime] = useState(() => createTime(10, 0))
  const [activeTimePicker, setActiveTimePicker] = useState(null)
  const [selectedApps, setSelectedApps] = useState([]);

  const handleTimeChange = (event, selectedDate) => {
    if (Platform.OS === 'android') {
      setActiveTimePicker(null)
    }

    if (!selectedDate || event.type === 'dismissed') {
      return
    }

    if (activeTimePicker === 'start') {
      setStartTime(selectedDate)
    }

    if (activeTimePicker === 'end') {
      setEndTime(selectedDate)
    }
  }


  const toggleDay = day => { //day is the day the user selected
    setSelectedDays(prev => //prev is the current value of selected days
      prev.includes(day) //checks if a day is already in selected days
        ? prev.filter(item => item !== day) //removes that day from the array
        : [...prev, day] //else it adds it to the array
    )
  }

  return (
    <SafeAreaProvider>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.background, { paddingTop: insets.top }]}
      >
        <View style={styles.header}>
          <Text style={styles.header_text}>New Focus Session</Text>

          <LinearGradient
            colors={['#111213', '#08080A']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={styles.sessionNameContainer}>
              <Image source={pencilIcon} style={styles.pencilIcon} />

              <View>
                <Text style={styles.sessionNameTitle}>Session Name</Text>

                <TextInput
                  placeholder="Session name here"
                  placeholderTextColor="#6F6F76"
                  maxLength={30}
                  value={focusSessionName}
                  onChangeText={setFocusSessionName}
                  style={styles.sessionNameInput}
                />
              </View>
            </View>
          </LinearGradient>

          <LinearGradient
            colors={['#111213', '#08080A']}
            style={styles.repeatContainer}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Text style={styles.repeatTitle}>Repeat On</Text>

            <View style={styles.daysRow}>
              {days.map(day => {
                const isSelected = selectedDays.includes(day.value)

                return (
                  <Pressable
                    key={day.value}
                    onPress={() => toggleDay(day.value)}
                    style={[
                      styles.dayCircle,
                      isSelected
                        ? styles.dayCircleSelected
                        : styles.dayCircleUnselected,
                    ]}
                  >
                    <Text
                      style={[
                        styles.dayText,
                        isSelected
                          ? styles.dayTextSelected
                          : styles.dayTextUnselected,
                      ]}
                    >
                      {day.label}
                    </Text>
                  </Pressable>
                )
              })}
            </View>
          </LinearGradient>

          <BlockedAppsComponent navigation={navigation}/>

          <LinearGradient
            colors={['#111213', '#08080A']}
            style={[styles.container, styles.timeContainer]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Text style={styles.timeTitle}>Time</Text>

            <View style={styles.timeRow}>
              <View>
                <Text style={styles.timeLabel}>Start Time</Text>

                <Pressable
                  style={styles.timeButton}
                  onPress={() => setActiveTimePicker('start')}
                >
                  <Text style={styles.timeButtonText}>{formatTime(startTime)}</Text>
                </Pressable>
              </View>

              <View style={styles.timeDivider} />

              <View>
                <Text style={styles.timeLabel}>End Time</Text>

                <Pressable
                  style={styles.timeButton}
                  onPress={() => setActiveTimePicker('end')}
                >
                  <Text style={styles.timeButtonText}>{formatTime(endTime)}</Text>
                </Pressable>
              </View>
            </View>

            {activeTimePicker && (
              <DateTimePicker
                value={activeTimePicker === 'start' ? startTime : endTime}
                mode="time"
                display={Platform.OS === 'ios' ? 'default' : 'spinner'}
                is24Hour={false}
                onChange={handleTimeChange}
              />
            )}
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  )
}

export default NewFocusSession