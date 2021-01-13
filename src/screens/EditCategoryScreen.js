import React from 'react';
import { View, Text } from 'react-native';
import CategoryForm from '../components/CategoryForm'
import * as actions from '../redux/actions'
import { connect } from 'react-redux';


// ColorPickerScreen
class CreateCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log('edit screen', this.props.route.params.categoryObj.color)
        return (
            // <View><Text>editCategory</Text></View>
            <CategoryForm
                navigation={this.props.navigation}
                onSubmit={this.props.editCategory}
                categoryName={this.props.route.params.categoryObj.category}
                colorName={this.props.route.params.categoryObj.color}
                oldCategory={this.props.route.params.categoryObj.category}
            />
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        editCategory: (category, color, oldCategory) => dispatch(actions.editCategory(category, color, oldCategory)),
        // addCategory: (category, color) => dispatch({ type: 'ADD_CATEGORY', payload: { category, color } }),
    }
}

export default connect(null, mapDispatchToProps)(CreateCategory)