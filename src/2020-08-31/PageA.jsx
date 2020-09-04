import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import Navigation from './Navigation';
import {connect} from 'react-redux';
import {setFlash} from './actions/commonActions';

const PageA = ({match, flash, setFlash}) => {
    let [flash, setFlash] = useState();

    useEffect(() => {
        console.log(flash);
    }, [flash]);

   return (
    
       <div>
           {
                "PageA"
           }

           <button onClick={() => setFlash("전달된 메세지")}>메세지 전달</button>
       </div>
   );
}

const mapStateToProps = (state) => {
    return {
        flash: state.common.flash
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFlash: (data) => {
            dispatch(setFlash(data));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageA);