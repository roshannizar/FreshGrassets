import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

class Activity extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Appbar.Header style={{ backgroundColor: 'whitesmoke' }}>
                    <Appbar.Content title='Activity' />
                    <Appbar.Action icon='ballot' />
                </Appbar.Header>
            </View>
        );
    }
}

export default Activity;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});