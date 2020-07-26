/**
 * Sahay App
 * @author: Abhishek Saini
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Image,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ActionCreators from '../redux/actions';
import colors from '../styles/colors';
import InputField from '../components/form/InputField';
import RadioInput from '../components/form/RadioInput';
import RoundedButton from '../components/buttons/RoundedButton';
import styles from './styles/ProviderProfile';
import Stars from '../components/Stars';

// import contactData from '../data/user.json';

// import Profile from '../components/profile/Profile';

class ProviderProfile extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <TouchableOpacity
                style={styles.closeButton}
                onPress={() => navigation.goBack()}
            >
                <Icon
                    name="md-close"
                    size={30}
                    color={colors.lightBlack}
                />
            </TouchableOpacity>
        ),
        headerStyle: styles.headerStyle,
    });

    static onChatPress() {
        alert('chat button pressed');
    }

    static onCallPress() {
        alert('call button pressed');
    }

    constructor(props) {
        super(props);
        this.state = {
            listing: props.navigation.state.params.listing,
            location: props.navigation.state.params.listing.location,
            loading: false,
        };

        this.listCreated = false;
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleProviderProfile = this.handleProviderProfile.bind(this);
    }

    componentDidMount() {
        const listing = this.props.navigation.state.params.listing;
        console.log(listing);
    }

    componentWillUnmount() {
        const { navigation } = this.props;
        navigation.state.params.onProviderProfileClose(navigation.state.params.listing.id);
    }

    handleLocationChange(location) {
        this.setState({ location });
    }

    handleProviderProfile() {
        const { navigation } = this.props;
        const { goBack } = navigation;
        this.setState({ loading: true });
        this.listCreated = true;

        // Faking slow server
        setTimeout(() => {
            this.setState({ loading: false }, () => {
                goBack();
            });
        }, 2000);
    }

    render() {
        const { location, loading, listing } = this.state;

        return (
            <View style={styles.wrapper}>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.heading}>
                        Provider Profile
                    </Text>
                    <View style={styles.content} style={{ padding: 20 }}>
                        <Image
                            style={styles.profilePic}
                            resizeMode="contain"
                            source={listing.photo}
                        />
                        <Text
                            style={styles.listingTitle}
                            numberOfLines={2}
                        >
                            {listing.title}
                        </Text>
                        <Text style={styles.listingPrice}>
                            ₹
                            {listing.price}
                            {' '}
                            {listing.priceType}
                        </Text>
                        {listing.stars > 0
                            ? (
                                <Stars
                                    votes={listing.stars}
                                    size={10}
                                    color={colors.green02}
                                />
                            )
                            : null}
                    </View>
                    <View style={styles.welcomeWrapper}>
                        <RoundedButton
                            text="Chat"
                            textColor={colors.white}
                            background={colors.green01}
                            handleOnPress={this.onChatPress}
                        />
                        <RoundedButton
                            text="Call"
                            textColor={colors.green01}
                            background={colors.white}
                            handleOnPress={this.onCallPress}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

ProviderProfile.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                listing: PropTypes.shape({
                    location: PropTypes.string,
                }),
            }),
        }),
    }).isRequired,
};

export default connect(null, mapDispatchToProps)(ProviderProfile);
