import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = ({ }) => {
   return (
       <div>
           <Link to = "/PageA">A</Link>
           <Link to = "/PageB">B</Link>
           <Link to = "/Works">Works</Link>
       </div>
   );
}
export default Navigation;
