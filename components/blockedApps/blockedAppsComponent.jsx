import React, { useState } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Pressable, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles/blockedAppsStyles.ts'

import plusIcon from '../../assets/Icons/plus_small.png'
function blockedAppsComponent() {
  return (
    <View style={styles.viewContainer}>
        <LinearGradient colors={['#111213', '#08080A']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
            <Text style={styles.headerText}>Block Apps</Text>
            <Text style={styles.subHeaderText}>These apps will be blocked during your session</Text>
            <View>
                <Pressable>
                    <LinearGradient colors={['#111213', '#08080A']} style={styles.addMoreBtn} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                        <Image source={plusIcon} style={styles.plusIcon}/>
                        <Text style={styles.addMoreText}>Add More</Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </LinearGradient>
    </View>
  )
}

export default blockedAppsComponent