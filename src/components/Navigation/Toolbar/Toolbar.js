import React from 'react';
import Style from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar = (props) => (
        <header className={Style.Toolbar}>
            <div>MENU</div>
            <Logo />
            <nav className={Style.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
);
export default toolbar;