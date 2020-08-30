import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Favorite from './Favorite';

const Favorites = ({}) => {
    let [favorites, setFavorites] = useState([]);
    let [form, setForm] = useState({
        title: "",
        reason: ""
    });

    useEffect(() => {
        axios.get("/favorites")
            .then(response => {
                console.log(response.data);
                        
                setFavorites(response.data);
            })
    }, []);

    const changeForm = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        });
    };

    const submit = (event) => {
        event.preventDefault();
 
        axios.post("/favorites", form)
            .then(response => {
                setFavorites([response.data, ...favorites]);
                setForm({
                    title: "",
                    reason: ""
                });
            })
            .catch(error => {
                console.log(error);
            });
    }


   return (
       <div className="favorites">
           {favorites.map(favorite => {
               return <Favorite key={favorite.id} favorite={favorite} favorites={favorites} setFavorites={setFavorites}></Favorite>;
           })}

           <form onSubmit={submit}>
               <input type="text" name="title" onChange={changeForm} placeholder="이름" value={form.title}/>
               <input type="text" name="reason" onChange={changeForm} placeholder="좋아하는 이유" value={form.reason}/>
               <button>제출</button>
           </form>
       </div>
   );
}

export default Favorites;