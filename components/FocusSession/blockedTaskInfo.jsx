import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import { styles } from './styles/blockedTaskInfo.ts'
import LinearGradient from 'react-native-linear-gradient'
// import { TextInput } from 'react-native/types_generated/index'
function blockedTaskInfo() {

  const [selectedDays, setSelectedDays] = useState([
    { id: 1, name: 'S', day: 'Sunday', isSelected: false },
    { id: 2, name: 'M', day: 'Monday', isSelected: false },
    { id: 3, name: 'T', day: 'Tuesday', isSelected: false },
    { id: 4, name: 'W', day: 'Wednesday', isSelected: false },
    { id: 5, name: 'T', day: 'Thursday', isSelected: false },
    { id: 6, name: 'F', day: 'Friday', isSelected: false },
    { id: 7, name: 'S', day: 'Saturday', isSelected: false },
  ])
  const [focusTaskName, setFocusTaskName] = useState('')
  const [focusTaskDescription, setFocusTaskDescription] = useState('')

  const handleDayPress = (id) => {
    setSelectedDays((prevDays) =>
      prevDays.map((item) =>
        item.id === id ? { ...item, isSelected: !item.isSelected } : item)
    )
  }

  const renderDays = () => {
    return (
      <View style={styles.daysContainer}>
        {selectedDays.map((item) => (
          <TouchableOpacity
            key={item.id} 
            onPress={() => handleDayPress(item.id)}
            style={[
              styles.dayButton,
              item.isSelected && styles.dayButtonSelected
            ]}
          >
            <Text
              style={[
                styles.daysText,
                item.isSelected && styles.daysTextSelected
              ]}
            >
              {item.name}
            </Text>

          </TouchableOpacity>
        ))}
      </View>
    )
  }

  return (
    <View style={styles.viewContainer}>
      <LinearGradient colors={['#2A2A2A', '#19191B']} style={styles.container}>
        <Text style={styles.daysTitleText}>
          Every
        </Text>
        {renderDays()}
        <TextInput
          style={styles.input}
          value={focusTaskName}
          onChangeText={setFocusTaskName}
          placeholder="Focus Task Name"
        />

        <View style={{paddingBottom: 20, paddingTop: 20}}>
          <TextInput
            style={[styles.input, styles.descriptionInput]}
            value={focusTaskDescription}
            onChangeText={setFocusTaskDescription}
            placeholder="Focus Session Description"
            placeholderTextColor="#7a7a7a"
            multiline={true}                            
            textAlignVertical="top"        
          />
        </View>
      </LinearGradient>
    </View>
  )
}

export default blockedTaskInfo