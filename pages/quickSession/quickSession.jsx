import React, { useState } from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, Image, Pressable } from 'react-native';
import { styles } from './styles/quickSessionStyles.ts'
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import BlockedAppsComponent from '../../components/blockedApps/blockedAppsComponent.jsx'

import arrow from '../../assets/Icons/arrowLeft.png'

function quickSession({ navigation }) {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={[styles.background, { paddingTop: insets.top }]}>
                <View style={styles.header}>
                    <Pressable style={styles.backButton} onPress={() => navigation.replace('MainTabs')}>
                        <Image source={arrow} style={styles.arrowIcon} />
                    </Pressable>
                    <Text style={styles.header_text}>Quick Session</Text>
                </View>
                <View>
                    <BlockedAppsComponent/>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default quickSession