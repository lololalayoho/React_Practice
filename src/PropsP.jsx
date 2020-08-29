import React,{} from 'react';
import ProcpsC from './ProcpsC';
import {useState} from 'react';

 function toggle_value(value){
    if(value=='열일')
       return '휴식';
    else
       return '열일';
 }

const PropsP = ({ }) => {
   let works = [{
      name : "빨래 널기",
      explain : "빨래를 야무지게 잘 넣어야 구겨지지 않는다. 꼭 탈탈 털어서 넣자"
   },
   {
      name : "청소기 밀기",
      explain : "로봇청소기 돌리자"
   }
];
   const toggle = () =>{
      setValue(toggle_value(value));
   };
   let [value, setValue] = useState('열일');
   return (
       <div>
          <h2>할일 목록</h2>
          <button className="toggle" onClick={() => {toggle();}}>
             {value}
          </button>
         {
            works.map((work)=>{
               return <ProcpsC name = {work.name} explain = {work.explain}/>
            })
         }
       </div>
   );
}
export default PropsP;