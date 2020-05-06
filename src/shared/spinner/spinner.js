import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import spinnerPic from '../../../assets/loadingImage.gif';

class Spinner extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={spinnerPic} resizeMode='contain' style={styles.image} />
            </View>
        );
    }
}

export default Spinner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent:'center',
        width: '100%'
    },
    image: {
        width: '50%',
    }
});