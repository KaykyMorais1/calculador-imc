import { View } from 'react-native'
import React from 'react'
import Title from '../Title'
import Form from '../Form'

export default function Main() {
    return (
        <View style={{ marginTop: 40, width: '100%' }}>
            <Title></Title>
            <Form></Form>
        </View>
    );
}