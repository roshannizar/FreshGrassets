import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

class Authentication extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text>Vola</Text>

            </SafeAreaView>
        );
    }
}

export default Authentication;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})