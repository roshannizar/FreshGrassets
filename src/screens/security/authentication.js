import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Easing } from 'react-native';
import { Button } from 'material-bread';
import Grocery from '../../../assets/grocery.png'
import { AnimatedBackgroundColorView } from 'react-native-animated-background-color-view';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logoutUser } from '../../redux/actions/authActions';

class Authentication extends Component {

    constructor() {
        super();
    }

    static getDerivedStateFromProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            Actions.home();
        }
    }

    render() {
        return (
            <AnimatedBackgroundColorView color='#00aced'
                duration={18000}
                easing={Easing.bounce}
                initialColor='red' style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={Grocery}
                        resizeMode='center'
                        style={{ height: 500 }}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{ paddingBottom: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 24 }}>Welcome to Fresh Grassets</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Button
                            text={'Sign In'}
                            onPress={() => Actions.replace('signin')}
                            type="flat"
                            containerStyle={{ padding: 20 }}
                            color='#00aced' />
                        <View style={{ margin: 5 }}></View>
                        <Button text={'Sign Up'} type='outlined' containerStyle={{ padding: 20 }} />
                    </View>
                </View>
            </AnimatedBackgroundColorView>
        );
    }
}

Authentication.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Authentication);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    bottomContainer: { borderTopLeftRadius: 15, borderTopRightRadius: 15, padding: 20, flex: 1, flexDirection: 'column', alignItems: 'center', backgroundColor: 'whitesmoke' }
})