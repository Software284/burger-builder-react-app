import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Style from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const layout = (props) => (
    <Auxiliary>
        <Toolbar/>     
        <SideDrawer/>
        <main className={Style.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout;