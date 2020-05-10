import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, AsyncStorage } from 'react-native';
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
        this._handleAddToCart = this._handleAddToCart.bind(this);
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
                quantity: 0
            });
            alert("You have exceed available quantity!");
        }
    }

    async _handleAddToCart() {
        const { product } = this.props;
        
        try {
            var order = await AsyncStorage.getItem('order');

            if(order != null) {
                var orderTemp = [];
                var i;
                orderTemp.push(order);
                console.log(order);
                for(i=0;i<order.length;i++) {
                    console.log(order[i]);
                }

                orderTemp.push(product);
                await AsyncStorage.setItem('order',JSON.stringify(orderTemp));
            } else {
                var orderTemp = [];
                orderTemp.push(JSON.parse(product));
                await AsyncStorage.setItem('order',JSON.stringify(orderTemp));
            }
            //AsyncStorage.removeItem('order');
            console.log(order);
        }
        catch(error) {
            console.log(error);
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
                    <Button color='whitesmoke' style={{ backgroundColor: 'green' }} onPress={this._handleAddToCart}>ADD TO CART</Button>
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