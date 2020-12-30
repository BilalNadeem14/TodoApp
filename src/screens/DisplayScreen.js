import React from 'react';
import { View, Text } from 'react-native';

class DisplayScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenName: 'DisplayScreen'
        }
    }

    render() {
        return (
            <View>
                <Text>Home</Text>
            </View>
        )
    }
}

export default DisplayScreen