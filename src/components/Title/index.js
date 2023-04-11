import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Title() {
    return (
        <View>
            <Text style={styles.title}>Easy Health</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 30,
        display: 'flex',
        textAlign: 'center',
        marginTop: 15,
        fontWeight: 'bold',
    }
})