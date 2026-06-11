import React, { useState } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles/quickFocusSessionStyle'
function quickFocusSessionComponent() {
    const [sessionTime, setSessionTime] = useState(50)
    return (
        <View style={styles.viewContainer}>
            <LinearGradient colors={['#111213', '#08080A']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <Text style={styles.headerText}>Quick Session</Text>
                <Text style={styles.subHeaderText}>Session Time</Text>
                <Text style={styles.sessionTimeText}>{sessionTime}m</Text>
                <View style={styles.btnContainer}>
                    <Pressable style={styles.editSessionBtn}>
                        <Text style={styles.editSesionText}>Edit Session</Text>
                    </Pressable>

                    <Pressable style={[styles.editSessionBtn, {backgroundColor: '#46D15C'}]}>
                        <Text style={styles.editSesionText}>Start Session</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    )
}

export default quickFocusSessionComponent