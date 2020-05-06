import React, { Component } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Profile from '../profile/profile';
import Product from '../product/product';
import Activity from '../activity/activity';
import Search from '../search/search';

class Home extends Component {

    state = {
        index: 0,
        routes: [
            { key: 'home', title: 'Home', icon: 'home' },
            { key: 'search', title: 'Search', icon: 'magnify' },
            { key: 'activity', title: 'Activity', icon: 'poll' },
            { key: 'profile', title: 'Profile', icon: 'account' }
        ],
    };

    _handleIndexChange = index => this.setState({ index });

    _renderScene = BottomNavigation.SceneMap({
        home: ProductsRoute,
        search: SearchRoute,
        activity: ActivityRoute,
        profile: ProfileRoute
    });

    render() {
        return (
            <BottomNavigation
                barStyle={{ backgroundColor: 'whitesmoke' }}
                navigationState={this.state}
                onIndexChange={this._handleIndexChange}
                renderScene={this._renderScene}
            />
        );
    }
}

const ProductsRoute = () => <Product />;

const SearchRoute = () => <Search />;

const ActivityRoute = () => <Activity />;

const ProfileRoute = () => <Profile />;

export default Home;