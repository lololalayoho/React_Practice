import React, { Fragment } from 'react';
import {useState} from 'react';

const Child = () => {
    let [value, setValue] = useState(0);
    let number = 0;
       
const sum = () => {
   value = value + 1;
   number += 1;
   setValue(value);
};
const minus = () => {
    value = value - 1;
    number -= 1;
    setValue(value);
 };

   return (
       <Fragment>
        <div>
            {value}
            {number}
        </div>
       <button onClick={() => {sum();}}>
           +
       </button>
        <button  onClick={() => {minus();}}>
            -
        </button>
        </Fragment>
   );
}
export default Child;