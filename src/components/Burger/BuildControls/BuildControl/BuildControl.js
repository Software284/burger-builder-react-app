import React from 'react';
import Style from './BuildControl.module.css';

const buildControl = (props) => {
    return (
        <div className={Style.BuildControl}>
        <div>{props.label}</div>
        <button className={Style.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={Style.More} onClick={props.added}>More</button>
    </div>
    );
}
    


export default buildControl;