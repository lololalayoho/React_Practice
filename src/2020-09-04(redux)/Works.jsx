import React,{} from 'react';
import Work from './Work';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {setPrint,setDoing} from '../Action/Common';
import {connect} from 'react-redux'

const Works = ({history, match,doing,print,setDoing,setPrint}) => {
   let [todos,setTodo] = useState([]);
   let [todo,setTo] = useState({
      name : "",
      explain : "",
      time : ""
   });

   let [value, setValue] = useState('열일');
   let [addwork,setAddwork] = useState(false);

   useEffect(()=>{
      axios.get('/todos')
      .then(response=>{
         console.log(response.data);
         setTodo(response.data);
      })
   },[]);

   const toggle_value = (value) => {
      if(value=='열일')
         return '휴식';
      else
         return '열일';
   }
  
   const toggle = () =>{
      setValue(toggle_value(value));
   };

   const submit = (event) => {
      event.preventDefault();
      axios.post("/todos",todo)
      .then(resposne=>{
         setTodo([resposne.data,...todos]);
         setTo({
            name : "",
            explain : "",
            time : "",
         })
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
             <form onSubmit={(event)=>{submit(event);setDoing(todo.name);setPrint("생성");}}>
               <input className="todo_name" value = {todo.name} type="text" name="name" placeholder="할일명" onChange={(event) => {changeform(event);}}/>
               <br/>
               <input className="todo_explain" value = {todo.explain}  type="text" name="explain" placeholder="할일 설명" onChange={(event) => {changeform(event);}}/>
               <br/>
               <input className="todo_time" value = {todo.time}  type="text" name="time" placeholder="완료 예정일" onChange={(event) => {changeform(event);}}/>
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
          <div className="alarm">"{doing}"가 {print}되었습니다.</div>
           {
            todos.map((todo)=>{
               return <Work key={todo.id} work = {todo} todos = {todos} setTodo = {setTodo}/>
            })
         }
       </div>
   );
}

const mapStateToProps = (state) => {
   return {
       print : state.common.print,
       doing : state.common.doing
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
       setPrint: (data) => {
           dispatch(setPrint(data));
       },
       setDoing: (data) => {
           dispatch(setDoing(data));
       }
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Works);