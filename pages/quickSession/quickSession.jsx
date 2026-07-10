import React, { useState, useEffect, useRef } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Image, Pressable, Alert } from 'react-native';
import { styles } from './styles/quickSessionStyles.ts'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import BlockedAppsComponent from '../../components/blockedApps/blockedAppsComponent.jsx'
import AddTimeComponent from '../../components/FocusSession/addTimeComponent.jsx'
import { storage } from '../../App.tsx';

import arrow from '../../assets/Icons/arrowLeft.png'

function quickSession({ navigation }) {
    const insets = useSafeAreaInsets();
    // const [timeCounter, setTimeCounter] = useState(10)
    const [savedAppList, setSavedAppList] = useState([])
    const [savedQuickSessionInfo, setSavedQucikSessionInfo] = useState([])
    const isFirstRender = useRef(true)

    //retrieve saved apps
    useFocusEffect(
        React.useCallback(() => {
            const savedApps = storage.getString('App')
            const savedTime = storage.getNumber('Duration')
            if (savedApps) {
                setSavedAppList(JSON.parse(savedApps))
            }

            // if (savedTime) {
            //     setTimeCounter(savedTime)
            // }
        }, [])
    )

    const saveQuickSession = () => {
        let quickFocusSessionInfo = [...savedQuickSessionInfo] //spread create new array
        const savedTime = storage.getNumber('Duration')
        if (savedAppList.length > 0 && savedTime >= 5) {
            storage.set('QuickFocusSession', JSON.stringify({
                Apps: savedAppList,
                Duration: savedTime
            }))

            // console.log(savedQuickSessionInfo)
            setSavedQucikSessionInfo(quickFocusSessionInfo)

            //then set it to storage
            // storage.set('QuickFocusSession', JSON.stringify(quickFocusSessionInfo))
        } else {
            Alert.alert("Missing Information")
        }

        // setSavedQucikSessionInfo(quickFocusSessionInfo)

        // //then set it to storage
        // storage.set('QuickFocusSession', JSON.stringify(quickFocusSessionInfo))

        Alert.alert("Successfully updated Quick Focus Session")

        navigation.replace("MainTabs")
    }

    // useEffect(() => {
    //     if (isFirstRender.current) { //protecting first run from wiping storage
    //         isFirstRender.current = false
    //         return
    //     }

    //     storage.set('QuickFocusSession', savedQuickSessionInfo)
    // }, [savedQuickSessionInfo])

    return (
        <SafeAreaProvider>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.background, { paddingTop: insets.top }]}>
                <View style={{ marginBottom: 150 }}>
                    <View style={styles.header}>
                        <Pressable style={styles.backButton} onPress={() => navigation.replace('MainTabs')}>
                            <Image source={arrow} style={styles.arrowIcon} />
                        </Pressable>
                        <Text style={styles.header_text}>Quick Session</Text>
                    </View>
                    <View>
                        <BlockedAppsComponent navigation={navigation} />

                        <Text style={styles.sessionDurationText}>Session Duration</Text>

                        <AddTimeComponent />

                        <Pressable style={[styles.editSessionBtn, { backgroundColor: '#46D15C' }]} onPress={() => saveQuickSession()}>
                            <Text style={styles.editSesionText}>Save Quick Session</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default quickSession