import React from 'react';
import {useState} from 'react';

const Wish = ({ }) => {
    let [wish, setWish] = useState("");

    const inputwish = (event) => {
        setWish(event.target.value);
    };
    const alertwish = (event) => {
        event.preventDefault();
        alert(wish)
    };
    
   return (
       <div>
           <form onSubmit={alertwish} >
            <h2>소원을 입력하세요.</h2>
            <input type="text" placeholder="소원을 입력하세요" onChange={inputwish}/>
            <button>소원 빌기</button>
           </form>
       </div>
   );
}
export default Wish;