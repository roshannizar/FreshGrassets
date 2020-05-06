import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Actions } from 'react-native-router-flux';

class Cart extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Appbar.Header style={{ backgroundColor: 'whitesmoke' }}>
                    <Appbar.BackAction onPress={() => Actions.pop()} />
                    <Appbar.Content title='Your Cart' />
                </Appbar.Header>
            </View>
        );
    }
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});