import React, { Fragment } from 'react';
import {useState} from 'react';
const Example = ({ }) => {
    let arr1 = [1,2,3];
    let arr2 = [4,5];
    let [activated, setActivated] = useState(false);

    let totalArr = [...arr1, ...arr2];

    let object1 = {
        name: "123",
        email: "ssa41"
    }

    let object2 = {
        age: 1
    }

    let totalObject = {
        ...object1,
        ...object2
    }
  
    let [form, setForm] = useState({});

    const changeForm = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        });

        console.log(form);
    };

    const submit = (event) => {
        event.preventDefault();
    };

    const other = () => {
        console.log("other");
    };

   return (
       <Fragment>
           <button onClick={() => setActivated(!activated)}>버튼</button>
           {
           activated ? 
             <form onSubmit={submit}>

             <input type="text" name="name" placeholder="이름을 입력하세요." onChange={(event) => {changeForm(event); other();}}/>
             <input type="text" name="contact" placeholder="연락처를 입력하세요." onChange={changeForm}/>
             <input type="text" name="email" placeholder="이메일을 입력하세요." onChange={changeForm}/>
 
             <button>제출</button>
            </form> : null   
        }
      
       </Fragment>
   );
}
export default Example;