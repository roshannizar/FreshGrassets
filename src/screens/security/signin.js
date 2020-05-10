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
            phone_number: '',
            password: '',
            boolNext: false,
            signInText: 'Next',
            error: false,
            loading:false
        }
        this._handleLogin = this._handleLogin.bind(this);
    }

    static getDerivedStateFromProps(nextProps, state) {
        if (nextProps.auth.isAuthenticated) {
            Actions.home();
        }

        if (nextProps.auth.user === '400 Not Found') {
            state.boolNext = false;
            state.error = true;
        } else {
            return null;
        }
    }

    _handleLogin() {
        const { phone_number, password } = this.state;
        const data = {
            phone_number: "+" + phone_number,
            password: password
        }
        this.setState({
            loading:true,
            signInText: 'Signing you in'
        })
        this.props.loginUser(data);
    }

    render() {
        const { boolNext, signInText, phone_number, password, error, loading } = this.state;

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
                                loading={loading}
                                onPress={this._handleLogin}>
                                {signInText}
                            </Button>
                        </View>
                        :
                        <View>
                            <TextInput
                                label='Enter Phone Number'
                                value={phone_number}
                                keyboardType='number-pad'
                                selectionColor='#00aced'
                                underlineColor='#00aced'
                                placeholderTextColor='#00aced'
                                placeholder='eg: 94123467890'
                                error={error}
                                onChangeText={phone_number => this.setState({ phone_number })}
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