import React from 'react';
import Style from './Button.module.css';
const button = (props) => (
    <button onClick={props.clicked} className={[Style.Button,Style[props.btnType]].join(' ')}>{props.children}</button>
);
export default button;