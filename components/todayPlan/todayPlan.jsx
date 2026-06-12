import React from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles/todayPlanStyle.ts'
function todayPlan() {
    const dummyData = [
        { id: 0, title: 'Go to Gym', startTime: '5:40 AM', duration: '120 mins' },
        { id: 1, title: 'Leetcode', startTime: '18:30 PM', duration: '120 mins' },
        { id: 2, title: 'Reflect', startTime: '20:40 PM', duration: '120 mins' },
    ]
    return (
        <View style={{marginBottom: 150}}>
            {dummyData.map((item, index) => (
                <View style={styles.viewContainer} key={index}>
                    <LinearGradient colors={['#111213', '#08080A']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                        <View style={styles.outerContainer}>
                            <View style={styles.innerContainer}>
                                <View style={styles.circleDot} />
                                <Text style={styles.titleText}>{item.title}</Text>
                            </View>
                            <Text style={styles.startTime}>Start time</Text>
                        </View>

                        <View style={styles.outerContainer}>
                            <View style={[styles.innerContainer, {gap: 0}]}>
                                <Text style={styles.durationTitle}>Duration: </Text>
                                <Text style={styles.durationTime}>{item.duration}</Text>
                            </View>
                            <Text style={styles.startTimeTime}>{item.startTime}</Text>
                        </View>
                    </LinearGradient>
                </View>
            ))}
        </View>
    )
}

export default todayPlan