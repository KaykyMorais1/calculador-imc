import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultImc(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.messageResultImc}</Text>
            <Text style={styles.text}>{props.resultImc}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    text: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
    }
})