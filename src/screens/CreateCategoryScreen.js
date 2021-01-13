import React from 'react';
import { View, Text } from 'react-native';
import Create from '../components/CategoryForm'
import { connect } from 'react-redux';

// ColorPickerScreen
class CreateCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Create
                navigation={this.props.navigation}
                onSubmit={this.props.addCategory}
            />)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: (category, color) => dispatch({ type: 'ADD_CATEGORY', payload: { category, color } }),
    }
}

export default connect(null, mapDispatchToProps)(CreateCategory)