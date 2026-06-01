import React, { useState } from 'react'
import { styles } from './styles/sign_in_styles.ts'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, TextInput, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient'

import EmailIcon from '../../assets/Icons/envelope.png'
import LockIcon from '../../assets/Icons/lock.png'
import userIcon from '../../assets/Icons/user.png'
import ArrowIcon from '../../assets/Icons/arrowLeft.png'

function sign_up_screen({ navigation }) {
    const insets = useSafeAreaInsets();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    return (
        <SafeAreaProvider>
            <ScrollView style={[styles.background, { paddingTop: insets.top }]}>
                <View style={styles.header}>
                    <Pressable onPress={() => navigation.replace('Onboarding')}>
                        <Image source={ArrowIcon} style={styles.arrowIcon} />
                    </Pressable>
                    <Text style={styles.header_text}>Create Account</Text>
                    <Text style={styles.subHeader_text}>Join those improving their focus everyday</Text>
                </View>
                <LinearGradient colors={['#2A2A2A', '#050404']} style={styles.container} start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.6 }}>

                    <Text style={styles.inputLabel}>Username</Text>
                    <View style={styles.inputContainer}>
                        <Image source={userIcon} style={styles.inputIcon} />
                        <TextInput
                            value={username}
                            onChangeText={setUsername}
                            placeholder="yourusername"
                            placeholderTextColor="#8A8A8A"
                            style={styles.textInput}
                            autoCapitalize="none"
                        />
                    </View>

                    <Text style={[styles.inputLabel, { marginTop: 18 }]}>Email</Text>
                    <View style={styles.inputContainer}>
                        <Image source={EmailIcon} style={styles.inputIcon} />
                        <TextInput
                            value={email}
                            onChangeText={setEmail}
                            placeholder="your@example.com"
                            placeholderTextColor="#8A8A8A"
                            style={styles.textInput}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <Text style={[styles.inputLabel, { marginTop: 18 }]}>Password</Text>
                    <View style={styles.inputContainer}>
                        <Image source={LockIcon} style={styles.inputIcon} />
                        <TextInput
                            value={password}
                            onChangeText={setPassword}
                            placeholder=""
                            placeholderTextColor="#8A8A8A"
                            style={styles.textInput}
                            secureTextEntry
                        />
                    </View>

                    <TouchableOpacity>
                        <Text style={styles.forgotPassword}>Forgot password?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('MainTabs')}>
                        <Text style={styles.signInText}>Sign In</Text>
                    </TouchableOpacity>

                </LinearGradient>

                <View style={styles.suggestionContainer}>
                    <Text style={styles.suggestionText}>Already have an account?</Text>
                    <Pressable onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.actionText}>Sign Up</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default sign_up_screen