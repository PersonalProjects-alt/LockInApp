import React, { useState, useEffect, useMemo, useRef } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, NativeModules, Pressable, Image, TextInput, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles/listOfAppStyle.ts'
import arrow from '../../assets/Icons/arrowLeft.png'
import search from '../../assets/Icons/search.png'

import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import { storage } from '../../App.tsx';
import { useFocusEffect } from '@react-navigation/native';

function listOfApps({ navigation }) {
    const insets = useSafeAreaInsets();
    const [searchApp, setSearchApp] = useState('')
    const { AndroidAppsModule } = NativeModules;
    const [apps, setApps] = useState([])
    const [selectedApps, setSelectedApps] = useState([]);
    const [savedApps, setSavedApps] = useState([])

    const isFirstRender = useRef(true)

    //getting installed apps
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

    const filteredApps = useMemo(() => {
        return apps.filter(app =>
            app.name?.toLowerCase().includes(searchApp.toLowerCase())
        );
    }, [apps, searchApp]);

    const toggleApp = (app) => {
        const id = app.name;
        const icon = app.icon

        setSelectedApps(prev =>
            prev.some(item => item.id === id)
                ? prev.filter(item => item.id !== id) //removing items
                : [...prev, { id, icon }] //adding items
        );

        //debugging
        // console.log(selectedApps)
        // console.log('mmkv storage list', appsList)
    };

    const getCategory = (appName) => {
        const name = appName?.toLowerCase() || '';

        if (
            name.includes('youtube') ||
            name.includes('netflix') ||
            name.includes('prime')
        ) {
            return 'Entertainment';
        }

        if (
            name.includes('instagram') ||
            name.includes('facebook') ||
            name.includes('messages') ||
            name.includes('meet') ||
            name.includes('gmail') ||
            name.includes('tiktok') ||
            name.includes('snapchat') ||
            name.includes('whatsapp') ||
            name.includes('reddit') ||
            name.includes('x')
        ) {
            return 'Social';
        }

        return 'App';
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        storage.set('App', JSON.stringify(selectedApps))
    }, [selectedApps])

    useEffect(() => {
        const saved = storage.getString('App')
        if (saved) {
            const parsed = JSON.parse(saved)
            if (Array.isArray(parsed)) setSelectedApps(parsed)
        }
    }, [])

    console.log('Saved App mmkv', selectedApps)

    const renderApp = ({ item, index }) => {
        const id = item.name;
        const isSelected = selectedApps.some(item => item.id === id);
        const isLast = index === filteredApps.length - 1;

        return (
            <Pressable
                onPress={() => toggleApp(item)}
                style={[
                    styles.appRow,
                    !isLast && styles.appRowBorder
                ]}
            >
                <View style={styles.appLeft}>
                    <Image
                        source={{ uri: item.icon }}
                        style={styles.appIcon}
                    />

                    <View>
                        <Text style={styles.appName}>
                            {item.name}
                        </Text>
                        <Text style={styles.appCategory}>
                            {getCategory(item.name)}
                        </Text>
                    </View>
                </View>

                <View
                    style={[
                        styles.circle,
                        isSelected && styles.circleSelected
                    ]}
                >
                    {isSelected && (
                        <Text style={styles.checkText}>✓</Text>
                    )}
                </View>
            </Pressable>
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={[styles.background, { paddingTop: insets.top }]}>
                <View style={styles.header}>
                    <Pressable
                        style={styles.backButton}
                        onPress={() => navigation.replace('MainTabs')}
                    >
                        <Image source={arrow} style={styles.arrowIcon} />
                    </Pressable>

                    <Text style={styles.header_text}>Add Blocked Apps</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Image source={search} style={styles.inputIcon} />

                    <TextInput
                        style={styles.AppNameInput}
                        value={searchApp}
                        onChangeText={setSearchApp}
                        placeholder="Search apps"
                        placeholderTextColor="#6F6F76"
                    />
                </View>

                <FlatList
                    data={filteredApps}
                    renderItem={renderApp}
                    keyExtractor={(item, index) =>
                        item.packageName || item.name || index.toString()
                    }
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContent}
                    style={styles.listContainer}
                />
            </View>
        </SafeAreaView>
    );
}

export default listOfApps