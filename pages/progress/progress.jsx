import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { styles } from './styles/progress.ts'
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context'
import ScreenOnTime from '../../components/screenOnTime/screenOnTime.jsx'
function progress() {
    const insets = useSafeAreaInsets()
  return (
    <SafeAreaProvider>
        <ScrollView style={[styles.background, { paddingTop: insets.top }]}>
            <View style={styles.header}>
                <Text style={styles.header_text}>Progress</Text>
                {/* <ScreenOnTime/> */}
            </View>
        </ScrollView>
    </SafeAreaProvider>
  )
}

export default progress