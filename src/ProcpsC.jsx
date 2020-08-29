import React,{} from 'react';

const ProcpsC = ({name,explain}) => {

    function date_to_str(format){
        var year = format.getFullYear();
        var month = format.getMonth() + 1;
        if(month<10) month = '0' + month;
        var date = format.getDate();
        if(date<10) date = '0' + date;
        var hour = format.getHours();
        if(hour<10) hour = '0' + hour;
        var min = format.getMinutes();
        if(min<10) min = '0' + min;
        var sec = format.getSeconds();
        if(sec<10) sec = '0' + sec;
        return year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
    }
    var today = date_to_str(new Date());

   return (
       <div className = "ProcsC">
           <table>
               <tr>
                   <td>
                       {name}
                   </td>
                   <td>
                       {today}
                   </td>
               </tr>
               <tr>
                   {explain}
               </tr>
           </table>
       </div>
    );
};
export default ProcpsC;