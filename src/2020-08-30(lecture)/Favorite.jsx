import React, { Fragment } from 'react';
import Favorites from './Favorites';
import axios from 'axios';
import {useState} from 'react';
import { act } from 'react-dom/test-utils';

const Favorite = ({favorite,setFavorites,favorites}) => {
    let [activated,setActivated] = useState(false);
    let [favoriteform,setFavoriteform] = useState({
        title : favorite.title,
        reason : favorite.reason
    });
    const changeForm = (event) => {
        setFavoriteform({
            ...favoriteform,
            [event.target.name] : event.target.value
        });
    }

    const update = (event)=> {
        event.preventDefault();
       
        axios.put("/favorites/" + favorite.id,favoriteform)
        .then(response=>{
            favorites = favorites.map(favoriteItem=> {
                if(favoriteItem.id === favorite.id)
                    return response.data;

                return favoriteItem;
            });
            
            setFavorites(favorites);
            setActivated(!activated);
        })
    
    };
    const Delete = (event) => {
        event.preventDefault();
        console.log(favorite.id);
        axios.delete("/favorites/"+ favorite.id)
        .then(response=>{
            favorites = favorites.filter(favoriteItem=>{
                if(favoriteItem.id != favorite.id){
                    console.log(favoriteItem.id);
                    return favoriteItem;
                }
            });
            setFavorites(favorites);
        })
    };
    
   return (
       <Fragment >
        <div className="favorite">
           <button className="button1"onClick ={() => setActivated(!activated)}>수정</button>
           {
               activated ? 
                <form onSubmit={update}>
                        <input type="text" name="title" placeholder="제목" onChange={changeForm} value={favoriteform.title}/>
                        <br/>
                        <input type="text" name="reason" placeholder="이유" onChange={changeForm} value={favoriteform.reason}/>
                        <button className="button3">적용하기</button>
                </form>
               :
                <div>
                이름 : {favorite.title}
                <br/>
                좋아하는 이유 : {favorite.reason}
                <button className="button2" onClick={Delete}>삭제</button>
               </div>
           }
        </div>
       </Fragment>
   );
}
export default Favorite;