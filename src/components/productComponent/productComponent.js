import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';

class ProductComponent extends Component {
    render() {
        const { product } = this.props;

        return (
            <View style={styles.container}>
                <Image source={{ uri: product.picurl }} loadingIndicatorSource={require('../../../assets/loadingImage.gif')} resizeMode='stretch' style={styles.image} />
                <View style={styles.detail}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.nameText}>{product.name}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text>Rs: {product.unitprice}</Text>
                    </View>
                </View>
                <Button color="white" style={styles.addBtn}>
                    Add Cart
                </Button>
            </View>
        );
    }
}

ProductComponent.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductComponent;

const styles = StyleSheet.create({
    container: {
        margin: 5,
        width: '47%',
        padding: 10,
        borderColor: 'whitesmoke',
        borderWidth: 2,
        backgroundColor: 'white'
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 10
    },
    detail: {
        flexDirection: 'row',
        alignItems: 'stretch',
        marginTop: 4,
        marginBottom: 4,
    },
    nameContainer: {
        alignSelf: 'flex-start', width: '50%', alignItems: 'flex-start'
    },
    priceContainer: {
        alignSelf: 'flex-end', width: '50%', alignItems: 'flex-end'
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 15
    },
    addBtn: {
        backgroundColor: 'green',
        marginTop: 4
    }
});