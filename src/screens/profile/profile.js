import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Profile extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text>Santa this is profile</Text>
            </View>
        );
    }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        marginTop:20
    }
});