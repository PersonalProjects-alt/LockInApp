import React from 'react'
import { View, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles/blockedApps.ts'
import plusIcon from '../../assets/Icons/plus_small.png'
function blockedApps() {
    return (
        <View style={styles.viewContainer}>
            <LinearGradient colors={['#2A2A2A', '#19191B']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <Text style={styles.headerText}>Blocked Apps</Text>
                <View style={styles.listedView}>
                    <View style={styles.plusIconContainer}>
                        <Image source={plusIcon} style={styles.plusIcon} />
                    </View>
                </View>
                <Text style={styles.numberOfAppsText}>3 apps</Text>
            </LinearGradient>
        </View>
    )
}

export default blockedApps