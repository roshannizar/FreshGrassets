import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Grocery from '../../../assets/login.jpg'
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions';
import PropTypes from 'prop-types';

class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            password: '',
            boolNext: false,
            signInText: 'Next'
        }
        this._handleLogin = this._handleLogin.bind(this);
    }

    _handleLogin() {
        this.props.loginUser();
    }

    render() {
        const { boolNext, signInText, phoneNumber, password } = this.state;

        return (
            <KeyboardAwareScrollView style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={Grocery}
                        resizeMode='center'
                        style={{ height: 400 }}
                    />
                </View>
                <View style={{ margin: 20 }}>
                    {boolNext ?
                        <View>
                            <TextInput
                                label='Enter Password'
                                value={password}
                                secureTextEntry={true}
                                placeholderTextColor='#00aced'
                                selectionColor='#00aced'
                                underlineColor='#00aced'
                                onChangeText={password => this.setState({ password })}
                            />
                            <View style={{ margin: 5 }}></View>
                            <Button
                                mode="contained"
                                color='#00aced'
                                onPress={
                                    // Actions.replace('home')
                                    this._handleLogin
                                }>
                                {signInText}
                            </Button>
                        </View>
                        :
                        <View>
                            <TextInput
                                label='Enter Phone Number'
                                value={phoneNumber}
                                keyboardType='number-pad'
                                selectionColor='#00aced'
                                underlineColor='#00aced'
                                placeholderTextColor='#00aced'
                                onChangeText={phoneNumber => this.setState({ phoneNumber })}
                            />
                            <View style={{ margin: 5 }}></View>
                            <Button
                                mode="contained"
                                color='#00aced'
                                onPress={() =>
                                    this.setState({
                                        signInText: 'Sign In',
                                        boolNext: true
                                    })
                                }>
                                {signInText}
                            </Button>
                        </View>
                    }
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

SignIn.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps, { loginUser })(SignIn);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})