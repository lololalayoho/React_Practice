import React,{useState,Fragment} from 'react';
import axios from 'axios';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import DetailWork from './DetailWork'
const Work = ({match,work,todos,setTodo}) => {
    let [updateflag, setUpdateflag] = useState(false);
    let [Detailflag,setDetailflag] = useState(false);
    let [doit,setDoit] = useState({
        name :  work.name,
        explain : work.explain,
        time : work.time
    });
    const changeForm = (event) => {
        setDoit({
            ...doit,
            [event.target.name] : [event.target.value]
        })
        console.log(work.id);
    }
    const update = (event) => {
        event.preventDefault();
        axios.put("/Todos/"+work.id,doit)
        .then(response=>{
            todos = todos.map(todo=>{
                if(todo.id === work.id)
                    return response.data
                else
                    return todo;
            });
            setTodo(todos);
            setUpdateflag(!updateflag);
        })
    }
    const Delete = (event) => {
        event.preventDefault();
        axios.delete("/Todos/"+work.id)
        .then(response=>{
            todos = todos.filter(todo=>{
                if(todo.id !== work.id)
                    return todo
            })
            setTodo(todos);
        })
    }
    return (
       <Fragment>
       <BrowserRouter>
            <div className="favorite" >
                <button className="button1" onClick = {()=>setUpdateflag(!updateflag)}>수정</button>
                {
                    updateflag ?
                        <form onSubmit = {update}>
                            <input type="text" name="name" placeholder="할 일" value={doit.name} onChange={changeForm}/>
                            <br/>
                            <input type="text" name="explain" placeholder="세부 사항" value={doit.explain} onChange={changeForm}/>
                            <br/>
                            <input type="text" name="time" placeholder="종료 예정일" value={doit.time} onChange={changeForm}/>
                            <br/>
                            <button className="button1">적용하기</button>
                        </form>
                    :
                    <a href ={"/"+ work.id}>
                            할 일 : {work.name}
                            <br/>
                            세부사항 : {work.explain}
                            <br/>
                            종료 예정일 : {work.time}
                        <button className="button2" onClick = {Delete}>삭제</button>
                    </a>
                    }
            </div>
       </BrowserRouter> 
       </Fragment> 
    );
};
export default Work;