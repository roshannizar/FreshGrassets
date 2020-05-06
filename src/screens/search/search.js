import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

class Search extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Appbar.Header style={{ backgroundColor: 'whitesmoke' }}>
                    <Appbar.Content title='Search' />
                </Appbar.Header>
                <Searchbar
                    placeholder="Search"
                    backgroundColor='whitesmoke'
                    value=''
                />
            </View>
        );
    }
}

export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});