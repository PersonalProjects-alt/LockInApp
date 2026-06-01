import React from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView } from 'react-native';
import { styles } from './styles/authentication.ts'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
function authentication() {
    const insets = useSafeAreaInsets()
    return (
        <SafeAreaProvider>
            <ScrollView style={[styles.background, { paddingTop: insets.top }]}>
                <View style={styles.header}>
                    <Text style={styles.header_text}>Authentication</Text>
                    <ScreenOnTime />
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default authentication