import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger';
import showItem from '../../hoc/showItem';

class BurgerBuilder extends Component {
    render () {
        return (
            <showItem>
                <Burger></Burger>
                <div>Burger Builder App</div>
            </showItem>
        );
    }
}

export default BurgerBuilder;