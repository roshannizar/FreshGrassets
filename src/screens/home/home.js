import React, { Component } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Profile from '../profile/profile';

class Home extends Component {

    state = {
        index: 0,
        routes: [
            { key: 'home', title: 'Home', icon: 'home' },
            { key: 'search', title: 'Search', icon: 'magnify' },
            { key: 'cart', title: 'Cart', icon: 'cart' },
            { key: 'profile', title: 'Profile', icon: 'account' }
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        home: MusicRoute,
        search: AlbumsRoute,
        cart: RecentsRoute,
        profile: RecentsRoute
    });

    render() {
        return (
            <BottomNavigation
                barStyle={{ backgroundColor: '#00aced' }}
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Profile/>;

export default Home;