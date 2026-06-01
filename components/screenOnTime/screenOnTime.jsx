import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './styles/screenOnTime.ts'
import LinearGradient from 'react-native-linear-gradient'
import { LineChart } from "react-native-gifted-charts"

function screenOnTime() {
    const [screenOnTime, setScreenOnTime] = useState('53m 22s')
    const dailyData = [{ value: 0, label: '1 Apr 2026' }, { value: 10, label: '2 Apr 2026' }, { value: 8, label: '3 Apr 2026' }, { value: 8, label: '4 Apr 2026' }, { value: 7, label: '5 Apr 2026' }, { value: 28, label: '6 Apr 2026' }, { value: 13, label: '7 Apr 2026' }];
    const hourlyData = [{ value: 2, label: '6 AM' }, { value: 4, label: '9 AM' }, { value: 3, label: '12 PM' }, { value: 8, label: '3 PM' }, { value: 7, label: '6  PM' }];

    const [currentData, setCurrentData] = useState(hourlyData)
    return (
        <View style={{ paddingBottom: 160 }}>
            <LinearGradient colors={['#2A2A2A', '#19191B']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
                <View style={{ paddingBottom: 40 }}>
                    <Text style={styles.headerScreenOnTime}>SCREEN TIME</Text>
                    <Text style={styles.screenOnTimeDigits}>{screenOnTime}</Text>
                </View>
                <View>
                    <FlatList>

                    </FlatList>
                </View>
                <View style={styles.lineChartStyle}>
                    <LineChart
                        areaChart
                        curved
                        // rotateLabel
                        isAnimated
                        data={currentData}
                        hideDataPoints
                        spacing={108}
                        color1="#8ECCD0"
                        startFillColor1="#8ECCD0"
                        endFillColor1="#8ECCD0"
                        startOpacity={0.9}
                        endOpacity={0.2}
                        initialSpacing={35}
                        noOfSections={4}
                        yAxisColor="white"
                        yAxisThickness={0}
                        rulesType="solid"
                        rulesColor="gray"
                        yAxisTextStyle={{ color: 'gray' }}
                        xAxisLabelTextStyle={{ color: 'gray', }}
                        yAxisLabelSuffix="hr"
                        xAxisColor="lightgray"
                        animateOnDataChange
                        animationDuration={1000}
                        onDataChangeAnimationDuration={300}

                    />
                </View>
            </LinearGradient>
        </View>
    )
}

export default screenOnTime