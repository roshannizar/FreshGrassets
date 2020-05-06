import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Button, Divider, TextInput } from 'react-native-paper';

class ProductDetailComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 0,
            totalAmount: 0
        }
        this._handleCalculation = this._handleCalculation.bind(this);
    }

    _handleCalculation(value) {
        const { product } = this.props;

        let total = value == '' ? 0 : Number.parseFloat(value) * Number.parseFloat(product.unitprice);

        if (Number.parseInt(product.quantity) >= value) {
            this.setState({
                totalAmount: total
            });
        }
        else {
            this.setState({
                totalAmount: 0,
                quantity:0
            });
            alert("You have exceed available quantity!");
        }
    }

    render() {
        const { product } = this.props;
        const { quantity, totalAmount } = this.state;
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center', marginBottom: 5 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>PRODUCT DETAIL</Text>
                </View>
                <Divider />
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <View style={{ borderWidth: 1, borderColor: 'whitesmoke', padding: 10, borderRadius: 15 }}>
                        <Image source={{ uri: product.picurl }} style={{ height: 100, width: 100 }} />
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{product.name}</Text>
                        <Text>{product.description}</Text>
                        <Text>Available Units: {product.quantity}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, width: '100%' }}>
                    <View style={{ marginTop: 10, marginLeft: 10, flexShrink: 1, flexWrap: 'wrap', width: '25%' }}>
                        <Text>Rs: {product.unitprice}</Text>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, flexShrink: 1, flexWrap: 'wrap' }}>Rs: {totalAmount}</Text>
                        </View>
                    </View>
                    <View style={{ alignItems: 'flex-end', width: '68%' }}>
                        <TextInput
                            style={{ width: '45%' }}
                            label='Quantity'
                            value={quantity}
                            onChangeText={(value) => this._handleCalculation(value)}
                            keyboardType='number-pad'
                        />
                    </View>
                </View>
                <View style={{ margin: 10 }}>
                    <Button color='whitesmoke' style={{ backgroundColor: 'green' }}>ADD TO CART</Button>
                </View>
            </View>

        );
    }
}

ProductDetailComponent.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductDetailComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
});