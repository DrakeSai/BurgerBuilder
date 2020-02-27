import React from 'react';
import showItem from '../../hoc/showItem';
import classes from './Layout.css';

const layout = ( props ) => (
    
    <showItem>
    <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </showItem>
   
);

export default layout;

