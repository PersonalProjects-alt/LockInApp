import React, { useState } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles/addTimeStyle.ts'
import plusIcon from '../../assets/Icons/plus_small.png'
import minusIcon from '../../assets/Icons/minusIcon.png'

function addTimeComponent() {
    const [timeCounter, setTimeCounter] = useState(10)
    return (
        <View style={styles.viewContainer}>
            <LinearGradient colors={['#111213', '#08080A']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <View style={styles.timeContainerView}>
                    <Pressable>
                        <LinearGradient colors={['#111213', '#08080A']} style={styles.addMoreBtn} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                            <Image source={minusIcon} style={styles.minusIcon} />
                        </LinearGradient>
                    </Pressable>

                    <Text style={styles.durationTimeText}>{timeCounter}min</Text>

                    <Pressable>
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