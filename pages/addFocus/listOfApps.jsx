import React, { useState, useEffect } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, NativeModules, Pressable, Image, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles/listOfAppStyle.ts'
import arrow from '../../assets/Icons/arrowLeft.png'
import search from '../../assets/Icons/search.png'

import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

function listOfApps({navigation}) {
    const insets = useSafeAreaInsets();
    const [searchApp, setSearchApp] = useState('')
    const { AndroidAppsModule } = NativeModules;
    const [apps, setApps] = useState([])

    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const installed = await AndroidAppsModule.getInstalledApps()
                if (mounted) setApps(installed)
            } catch (e) {
                console.warn('Failed to load installed apps', e)
            }
        })()

        return () => { mounted = false }
    }, [])

    return (
        <SafeAreaProvider>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.background, { paddingTop: insets.top }]}>
                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={() => navigation.replace('addFocusSession')}>
                        <Image source={arrow} style={styles.arrowIcon} />
                    </Pressable>
                    <Text style={styles.header_text}>Add Blocked Apps</Text>
                </View>
                <View>
                    <View style={styles.inputContainer}>
                        <Image source={search} style={styles.inputIcon}/>
                        <TextInput
                            style={styles.AppNameInput}
                            value={searchApp}
                            onChangeText={setSearchApp}
                            placeholder="Search apps"
                            placeholderTextColor="#6F6F76"
                        />
                    </View>

                    <View>
                        {apps.map((item, index) => (
                            <View key={index}>
                                <Image source={{ uri: item.icon }} style={{ width: 40, height: 40 }} />
                                <Text style={{color: 'white'}}>{item.name}</Text>
                            </View>
                        ))}

                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default listOfApps