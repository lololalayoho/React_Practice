import React, { } from 'react';
import Child from './Child';

const Parent = ({ }) => {

    // let sweats = [50, 30, 100];

    // let banana = sweats[0];
    // let apple = sweats[1];
    // let berry = sweats[2];

    // let [banana, apple, berry] = sweats;
   return (
       <div>
         <h2>할일 목록</h2>
         <Child />
       </div>
   );
}
export default Parent;