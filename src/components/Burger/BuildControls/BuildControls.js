import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Lechuga', type: 'salad'},
    { label: 'Tocino', type: 'bacon'},
    { label: 'Queso', type: 'cheese'},
    { label: 'Carne', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Precio: ${props.price}</p>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label} label={ctrl.label} 
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}>

            </BuildControl>
        ))}
    </div>
);

export default buildControls;
