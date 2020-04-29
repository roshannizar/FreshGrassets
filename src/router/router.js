import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import SignIn from '../screens/security/signin';
import Authentication from '../screens/security/authentication';
import Home from '../screens/home/home';

const Routes = () => (
    <Router>
        <Scene key='root'>
            <Scene
                key='authentication'
                component={Authentication}
                title='Authentication'
                hideNavBar={true}
                initial={true}
            />
            <Scene
                key='signin'
                component={SignIn}
                title='Sign In'
            />
            <Scene
            type='reset'
                key='home'
                component={Home}
                title='Home'
                hideNavBar={true}
            />
        </Scene>
    </Router>
);

export default Routes;