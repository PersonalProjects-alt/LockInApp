import React, { useState, useEffect, useRef } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles/quickFocusSessionStyle'
import { storage } from '../../App';


function quickFocusSessionComponent({ navigation }) {
    const [savedQuickFocusSessionInfo, setSavedQuickFocusSessionInfo] = useState({})

    useFocusEffect(
        React.useCallback(() => {
            const savedQuickSession = storage.getString("QuickFocusSession")
            if (savedQuickSession) {
                setSavedQuickFocusSessionInfo(JSON.parse(savedQuickSession))
            }
        }, [])
    )

    console.log(savedQuickFocusSessionInfo)


    return (
        <View style={styles.viewContainer}>
            <LinearGradient colors={['#111213', '#08080A']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <Text style={styles.headerText}>Quick Session</Text>
                <Text style={styles.subHeaderText}>Session Time</Text>
                
                <Text style={styles.sessionTimeText}>{savedQuickFocusSessionInfo?.Duration} 
                    <Text style={styles.minutesText}> min</Text>
                    </Text>
                <View style={styles.btnContainer}>
                    <Pressable style={styles.editSessionBtn} onPress={() => navigation.replace('QuickSession')}>
                        <Text style={styles.editSesionText}>Edit Session</Text>
                    </Pressable>

                    <Pressable style={[styles.editSessionBtn, { backgroundColor: '#46D15C' }]}>
                        <Text style={styles.editSesionText}>Start Session</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    )
}

export default quickFocusSessionComponent