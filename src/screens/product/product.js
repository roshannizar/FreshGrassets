import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/actions/productsAction';
import PropTypes from 'prop-types';
import { Appbar, Chip } from 'react-native-paper';
import Spinner from '../../shared/spinner/spinner';
import ProductComponent from '../../components/productComponent/productComponent';
import common from '../../shared/common/common';

class Products extends Component {


    componentDidMount() {
        this.props.getProducts();
    }

    renderProducts() {
        const { products, loading } = this.props.product;
        let productItems;

        if (products === null || loading) {
            productItems = <Spinner />;
        } else {
            if (products.length < 0) {
                productItems = <Text>No products available</Text>;
            } else {
                productItems = <FlatList
                    data={products}
                    numColumns={2}
                    contentContainerStyle={styles.list}
                    ListHeaderComponent={this.renderChipList()}
                    renderItem={({ item }) => (
                        <ProductComponent product={item} />
                    )}

                />
            }
        }

        return <View>{productItems}</View>;
    }

    renderChipList() {
        return (
            <FlatList
                data={common.chipData}
                renderItem={({ item }) => (
                    <Chip style={styles.chipContainer} selected={item.selected}>{item.name}</Chip>
                )}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
            />
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Appbar.Header style={{ backgroundColor: 'whitesmoke' }}>
                    <Appbar.Content title='Fresh Grassets' />
                    <Appbar.Action icon='cart' />
                </Appbar.Header>
                <View style={{ flex: 1 }}>
                    {this.renderProducts()}
                </View>
            </View>
        );
    }
}

Products.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    product: state.product
});

export default connect(mapStateToProps, { getProducts })(Products);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    category: {
        flexDirection: 'row'
    },
    chipContainer: {
        margin: 5,
        marginTop: 10
    }
});