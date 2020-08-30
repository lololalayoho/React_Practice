import React,{} from 'react';
import Work from './Work';
import {useState,useEffect} from 'react';


const Works = ({ }) => {
   let [todos,setTodo] = useState([]);
   let [todo,setTo] = useState({
      name : "",
      explain : "",
      time : ""
   });

   useEffect(() => {
      setTodo(
         [
            {
               name : "빨래 널기",
               explain : "빨래를 야무지게 잘 넣어야 구겨지지 않는다. 꼭 탈탈 털어서 넣자",
               time : "2020-08-14 04:13"
            },
            {
               name : "청소기 밀기",
               explain : "로봇청소기 돌리자",
               time: "2020-08-14 04:13"
            }
         ]
      )
   }, [])
  
   const toggle = () =>{
      setValue(toggle_value(value));
   };

   let [value, setValue] = useState('열일');
   let [addwork,setAddwork] = useState(false);

   const toggle_value = (value) => {
      if(value=='열일')
         return '휴식';
      else
         return '열일';
   }

   const submit = (event) => {
      event.preventDefault();
      todo.time = Date();
      setTodo([todo,...todos]);
      setTo({
         name : "",
         explain : "",
         time : "",
      })
   }

   const changeform = (event) => {
      setTo({
         ...todo,
         [event.target.name] : event.target.value
     });
   }

   return (
       <div>
          <h2>할일 목록</h2>
          <button className="maketodo" onClick={()=>{setAddwork(!addwork);}}>할일 생성</button>
          {
             addwork ?
             <div>
             <form onSubmit={(event)=>{submit(event);}}>
               <input className="todo_name" value = {todo.name} type="text" name="name" placeholder="할일명" onChange={(event) => {changeform(event);}}/>
               <br/>
               <input className="todo_explain" value = {todo.explain}  type="text" name="explain" placeholder="할일 설명" onChange={(event) => {changeform(event);}}/>
               <br/>
               <button>확인</button>
               <button onClick={()=>{setAddwork(!addwork);}}>취소</button>
            </form>
            </div>
             :null
          }
          <button className={value === "열일" ? "toggle work" : "toggle rest"} onClick={() => {toggle();}}>
             {value}
          </button>
           {
            todos.map((todo, index)=>{
               return <Work key={index} work = {todo}/>
            })
         }
       </div>
   );
}
export default Works;