import React, { useState, useEffect, useRef } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Pressable, Image, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles/addTimeComponentStyle.ts'
import plusIcon from '../../assets/Icons/plus_small.png'
import minusIcon from '../../assets/Icons/minusIcon.png'
import { storage } from '../../App.tsx';

function addTimeComponent() {
    const [timeCounter, setTimeCounter] = useState(10)
    const isFirstRender = useRef(true)

    const incrementTime = () => {
        if (timeCounter < 1440) {
            setTimeCounter(timeCounter + 5)
        }
    }

    const decrementTime = () => {
        if (timeCounter > 5) {
            setTimeCounter(timeCounter - 5)
        }
    }

    useEffect(() => {
        if (isFirstRender.current) { //protecting first run from wiping storage
            isFirstRender.current = false
            return
        }
        storage.set('Duration', timeCounter)
    }, [timeCounter])

    return (
        <View style={styles.viewContainer}>
            <LinearGradient colors={['#111213', '#08080A']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <View style={styles.timeContainerView}>
                    <Pressable onPress={() => decrementTime()}>
                        <LinearGradient colors={['#111213', '#08080A']} style={styles.addMoreBtn} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                            <Image source={minusIcon} style={styles.minusIcon} />
                        </LinearGradient>
                    </Pressable>

                    <Text style={styles.durationTimeText}>{timeCounter} min</Text>

                    <Pressable onPress={() => incrementTime()}>
                        <LinearGradient colors={['#111213', '#08080A']} style={styles.addMoreBtn} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                            <Image source={plusIcon} style={styles.plusIcon} />
                        </LinearGradient>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    )
}

export default addTimeComponent