import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { datasource } from './Data';

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() =>
                    navigation.navigate('Edit', { index: index, type: section.title, key: item.key })
                }
            >
                <Image
                    source={item.image}
                    style={styles.imageStyle}
                    resizeMode="contain" // Ensure the whole image is displayed
                />

                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar />
            <Button title="Add Pokémon" onPress={() => navigation.navigate("Add")} />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgcolor } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>
                        {title}
                    </Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16, // Slightly larger font for better readability
        marginHorizontal: 15, // Add consistent horizontal margin
        marginVertical: 10, // Add vertical spacing
        textAlign: 'left',
        flex: 1, // Ensure text takes the available space
        color: '#333', // Softer color for text
        fontWeight: '500', // Add slight boldness for visibility
    },
    opacityStyle: {
        borderWidth: 1, // Keeps the border
        borderColor: '#ccc', // Subtle border color for a modern look
        borderRadius: 10, // Rounded corners for a smoother UI
        padding: 15, // Slightly more padding for comfortable spacing
        flexDirection: 'row', // Row layout for text and image
        alignItems: 'center', // Center-align items vertically
        justifyContent: 'space-between', // Space out text and image
        marginVertical: 10, // Add vertical spacing between rows
        backgroundColor: '#fff', // White background for card effect
        shadowColor: '#000', // Add shadow for a raised card look
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2, // Elevation for Android shadow
    },
    headerText: {
        fontSize: 22, // Slightly larger font for headers
        marginHorizontal: 15,
        marginVertical: 10,
        textAlign: 'center',
        fontWeight: 'bold', // Bold for emphasis
        color: '#555', // Softer color for modern look
        backgroundColor: '#f8f8f8', // Light background for header contrast
        paddingVertical: 10, // Add padding for readability
        borderRadius: 5, // Slightly rounded corners
    },
    imageStyle: {
        width: 80, // Slightly smaller image for proportional layout
        height: 80,
        marginLeft: 15, // Add spacing between text and image
        resizeMode: 'contain', // Ensure the entire image is visible
        borderRadius: 5, // Add slight rounding for polished look
    },
});


export default Home;
