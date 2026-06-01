import React from 'react'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles/onboarding.ts'
import LinearGradient from 'react-native-linear-gradient'

import EmailIcon from '../../assets/Icons/envelope.png'
import onboardingImage from '../../assets/images/onboardingImage.png'
import GoogleIcon from '../../assets/Icons/google.png'
function onboarding({ navigation }) {
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaProvider>
            <ScrollView style={[styles.background, { paddingTop: insets.top }]}>
                <View style={styles.header}>
                    <Text style={styles.header_text}>Start Your Focus Journey</Text>
                    <Text style={styles.subHeader_text}>Block distractions, stay in the zone, and build better focus habits</Text>

                    <LinearGradient
                        colors={['#1F1F1F', '#070707']}
                        style={styles.container}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                    >
                        <Pressable
                            style={styles.buttonOptionContainer}
                            onPress={() => navigation.navigate('SignUp')}
                        >
                            <LinearGradient
                                colors={['#2A2A2A', '#161616']}
                                style={styles.buttonOption}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                            >
                                <Image source={EmailIcon} style={styles.inputIcon} />
                                <Text style={styles.buttonText}>Continue with Email</Text>
                            </LinearGradient>
                        </Pressable>

                        <Pressable style={styles.buttonOptionContainer}>
                            <LinearGradient
                                colors={['#2A2A2A', '#161616']}
                                style={styles.buttonOption}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 0, y: 1 }}
                            >
                                <Image source={GoogleIcon} style={styles.googleIcon} />
                                <Text style={styles.buttonText}>Continue with Google</Text>
                            </LinearGradient>
                        </Pressable>
                    </LinearGradient>


                    <View style={styles.suggestionContainer}>
                        <Text style={styles.suggestionText}>Already have an account?</Text>
                        <Pressable onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.actionText}>Sign In</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default onboarding