import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import { StatusBar, StyleSheet, useColorScheme, View, Text, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import { styles } from './styles/swipeCards.ts'
import LinearGradient from 'react-native-linear-gradient';
function swipeCards() {

    // const onSwipe = (direction, title) => {
    //     dummyData.length -= 1
    //     console.log('You swiped: ' + direction)
    //     console.log(dummyData.length)
    // }

    const onCardLeftScreen = (myIdentifier) => {
        dummyData.length -= 1
        console.log(myIdentifier + ' left the screen')
        console.log(dummyData.length)
    }

    const [cards, setCards] = useState([ //initialize state for the cards
        { title: 'Practicing Leetcode Question', desc: '-Practising front end development -Practising Linked List Questions', },
        { title: 'Book driving test appointment', desc: '- Go online and book driving test today ' },
        { title: 'Go Gym', desc: '- Chest work out ' },
    ])

    const onSwipe = (direction, title) => {
        console.log('You swiped: ' + direction)

        setCards((currentCards) =>
            currentCards.filter((card) => card.title !== title)
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#000' }}>
            {cards.length === 0 ? (
                <View style={styles.noCardsContainer}>
                    <Text style={styles.noCardsText}>All Done!</Text>
                </View>
            ) : (
                <View style={{paddingBottom: 260}}>
                    {cards.map((item, index) => {
                        const stackOffset = index + 10;
                        return (
                            <View style={styles.cardContainer} key={item.title}>
                                <TinderCard
                                    onSwipe={(direction) => onSwipe(direction, item.title)}
                                    preventSwipe={['up', 'down']}
                                >
                                    <Pressable>
                                        <View style={styles.cardWrapper}>
                                            <LinearGradient
                                                style={styles.card}
                                                colors={['#2A2A2A', '#19191B']}
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 0, y: 1 }}
                                            >
                                                <Text style={styles.cardFirstTitle}>Today's Focus</Text>
                                                <Text style={styles.cardTitle}>{item.title}</Text>
                                                <Text style={styles.cardDesc}>{item.desc}</Text>

                                                <View style={styles.instructionsView}>
                                                    <Text style={styles.instructionsText}>Swipe left or right to complete task</Text>
                                                </View>
                                            </LinearGradient>
                                        </View>
                                    </Pressable>
                                </TinderCard>
                            </View>
                        )
                    })}
                </View>
            )}

        </View>

    )
}

export default swipeCards