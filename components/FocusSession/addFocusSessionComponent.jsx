import React, { useState } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles/addFocusSessionComponentStyles.ts'

function addFocusSessionComponent( {navigation }) {
  return (
        <View style={styles.viewContainer}>
            <LinearGradient colors={['#111213', '#08080A']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <Text style={styles.headerText}>Add Focus Session</Text>
                {/* <Text style={styles.subHeaderText}>Session Time</Text> */}
                <View style={styles.btnContainer}>
                    {/* <Pressable style={styles.editSessionBtn} onPress={() => navigation.replace('QuickSession')}>
                        <Text style={styles.editSesionText}>Edit Session</Text>
                    </Pressable> */}

                    <Pressable style={[styles.editSessionBtn, {backgroundColor: '#ffffff'}]} onPress={() => navigation.replace('addFocusSession')}>
                        <Text style={styles.editSesionText}>Add Focus Session</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
  )
}

export default addFocusSessionComponent