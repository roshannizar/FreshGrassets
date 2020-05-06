import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import ProductDetailComponent from '../productDetailComponent/productDetailComponent';
import RBSheet from "react-native-raw-bottom-sheet";

class ProductComponent extends Component {

    _handleBottomSheet() {
        this.RBSheet.open();
    }

    render() {
        const { product } = this.props;

        return (
            <View style={styles.container}>
                <View>
                    <Image source={{ uri: product.picurl }} loadingIndicatorSource={require('../../../assets/loadingImage.gif')} resizeMode='stretch' style={styles.image} />
                    <View style={styles.tag}>
                        <Text style={styles.nameText}>{product.name}</Text>
                    </View>
                </View>
                <View style={styles.detail}>
                    <View style={styles.priceContainer}>
                        <Text>Rs: {product.unitprice}</Text>
                    </View>
                </View>
                <Button color="white" style={styles.addBtn} onPress={() => this._handleBottomSheet()}>
                    Add Cart
                </Button>
                <RBSheet
                    ref={ref => {
                        this.RBSheet = ref;
                    }}
                    animationType="slide"
                    closeOnDragDown={true}
                    height={400}
                    duration={0}
                    customStyles={{
                        wrapper: {
                            padding: 10
                        },
                        container: {
                            borderRadius:15,
                            marginBottom:10
                        }
                    }}
                >
                    <ProductDetailComponent product={product} />
                </RBSheet>
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
    priceContainer: {
        alignSelf: 'flex-end', alignItems: 'flex-end', flexDirection: 'row'
    },
    nameText: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    addBtn: {
        backgroundColor: 'green',
        marginTop: 4
    },
    tag: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
});