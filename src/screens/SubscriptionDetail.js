import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, ScrollView, StyleSheet, StatusBar, Image , Alert} from 'react-native';
import { FONTS, COLORS, RESPONSIVE, FONTSIZE } from '@util/common';
import { Card, Title, Paragraph } from 'react-native-paper';
import DiabetButton from '../components/DiabetButton'

const SubscritionDetail = () => {
    const handleSubscribe = () =>
    Alert.alert(
      "Yay!",
      "You are subscribed.",
      [
        {
          text: "Done",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }
      ]
    );
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
                <View style={styles.detail} >
                    {/* <Image
                        style={styles.logo}
                        source={{
                            uri: 'https://i.ibb.co/ZWn0Sfw/milk2.jpg',
                        }}
                    /> */}
                    {/* <Text style={styles.title}>Subscrition Detail</Text>
                    <Text style={styles.labelAmount}>Rs 2000/ month</Text>
                    <Paragraph >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Paragraph> */}
                    <Card>
                        <Card.Cover style={styles.logo} source={{ uri: 'https://i.ibb.co/ZWn0Sfw/milk2.jpg' }} />
                    </Card>
                    <Card>
                        <Card.Content>
                            <Title>Subscrition Detail</Title>
                            <Title>Rs 2000/ month</Title>
                            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
                        </Card.Content>
                    </Card>
                    <DiabetButton
                                title="Subscribe"
                               onPress={handleSubscribe}
                              
                            />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SubscritionDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: COLORS.secondary,
    },
    scrollView: {
        backgroundColor: COLORS.secondary,
        marginHorizontal: 15,
    },
    title: {
        // fontFamily: FONTS.medium,
        fontSize: FONTSIZE.h3,
        textAlign: 'justify',
        paddingTop: 15
    },
    labelAmount: {
        fontFamily: FONTS.semibold,
        fontSize: FONTSIZE.h5,
        textAlign: 'justify',
        paddingTop: 10,
        paddingBottom: 10
    },
    labelDescription: {
        fontSize: FONTSIZE.h5,
        textAlign: 'justify'
    },
    logo: {
        borderRadius: 15,
    },

    detail:{ flex: 1, marginBottom: 50 }
   
});