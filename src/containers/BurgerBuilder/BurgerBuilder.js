import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import showItem from '../../hoc/showItem';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const IGREDIENT_PRICES = {
            salad: 0.5,
            bacon: 0.7,
            cheese: 0.4,
            meat: 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4
    }

    addIgredientHandler = (type) => {
        const oldCount = this.state.ingredients [type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;   
        const priceAddition = IGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}); 
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients [type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;   
        const priceDeduction = IGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients}); 
    }

    render () {
        return (
            <showItem>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls 
                ingredientAdded={this.addIgredientHandler} 
                ingredientRemoved={this.removeIngredientHandler}
                price={this.state.totalPrice}>
                
                </BuildControls>
            </showItem>
        );
    }
}

export default BurgerBuilder;