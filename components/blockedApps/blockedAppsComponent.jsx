import React, { useEffect, useState } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Pressable, Image, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles/blockedAppsStyles.ts'

import plusIcon from '../../assets/Icons/plus_small.png'
import minusIcon from '../../assets/Icons/minusIcon.png'
import { storage } from '../../App.tsx';
function blockedAppsComponent({ navigation }) {
    const [savedAppList, setSavedAppList] = useState([])
    useFocusEffect(
        React.useCallback(() => {
            const savedApps = storage.getString('App')
            if (savedApps) {
                setSavedAppList(JSON.parse(savedApps))
            }
        }, [])
    )

    // console.log(savedAppList)

    function removeApp(item) {
        const id = item.id
        const newList = savedAppList.filter(item => item.id !== id)
        setSavedAppList(newList)
        storage.set('App', JSON.stringify(newList))
    }

    return (
        <View style={styles.viewContainer}>
            <LinearGradient colors={['#111213', '#08080A']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <Text style={styles.headerText}>Block Apps</Text>
                <Text style={styles.subHeaderText}>These apps will be blocked during your session</Text>
                <View style={styles.appListContainer}>
                    {savedAppList.map((item, index) => (
                        <View key={index}>
                            <Pressable style={styles.removeBtn} onPress={() => removeApp(item)}>
                                <Image source={minusIcon} style={styles.minusIcon} />
                            </Pressable>
                            <LinearGradient colors={['#111213', '#08080A']} style={styles.addMoreBtn} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                                <Image style={styles.appIcon} source={{ uri: item.icon }} />
                                <Text style={styles.addMoreText}>{item.id}</Text>
                            </LinearGradient>
                        </View>
                    ))}
                </View>
                <View style={{ marginTop: 10 }}>
                    <Pressable onPress={() => navigation.replace('ListApp')}>
                        <LinearGradient colors={['#111213', '#08080A']} style={styles.addMoreBtn} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                            <Image source={plusIcon} style={styles.plusIcon} />
                            <Text style={styles.addMoreText}>Add More</Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    )
}

export default blockedAppsComponent