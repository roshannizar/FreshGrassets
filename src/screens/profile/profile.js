import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { logoutUser } from '../../redux/actions/authActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Profile extends Component {

    constructor(props) {
        super(props);
        this._handleLogout = this._handleLogout.bind(this);
    }

    _handleLogout() {
        this.props.logoutUser();
        Actions.authentication();
    }

    render() {
        return (
            <View>
                <Appbar.Header style={{ backgroundColor: '#00aced' }}>
                    <Appbar.Content title='Profile' />
                    <Appbar.Action icon='logout' onPress={this._handleLogout} />
                </Appbar.Header>
            </View>
        );
    }
}

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Profile);

const styles = StyleSheet.create({
});