import React,{} from 'react';

const Work = ({work}) => {

    return (
       <div className = "ProcsC" onClick={alert}>
           <table>
               <tr>
                   <td>
                       {work.name}
                   </td>
               </tr>
               <tr>
                   <td>
                       {work.time}
                   </td>
               </tr>
               <tr>
                   {work.explain}
               </tr>
           </table>
       </div>
    );
};
export default Work;