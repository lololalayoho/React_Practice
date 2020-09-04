import React,{ Fragment } from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';

const DetailWork = ({match}) => {
    let [Detailtodo,setDetialTodo] = useState({});

    useEffect(()=>{
        axios.get('/todos/'+ match.params.id)
        .then(response=>{
        setDetialTodo(response.data);
        })
    },[]);

   return (
       <div>
            <div className = "favorite">
                할 일 : {Detailtodo.name}
                <br/>
                세부사항 : {Detailtodo.explain}
                 <br/>
                종료 예정일 : {Detailtodo.time}
               </div>
       </div>
   );
}
export default DetailWork;