import React,{useContext} from "react";
import {AppContext} from "../context/AppContext";

const Currency = () => {
    const {dispatch} = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHANGE_CURRENCY',
            payload: val
        });
    };

    return (
        <div className='alert alert-secondary'> Currency {
            <select className='currency' id='currency' onChange={(e) => changeCurrency(e.target.value)}>
                <option value='£'>Pound (£)</option>
                <option value='$'>Dollar ($)</option>
                <option value='€'>Euro (€)</option>
                <option value='¥'>Yuan (¥)</option>
            </select>
        }
        </div>
    );
};

export default Currency;
