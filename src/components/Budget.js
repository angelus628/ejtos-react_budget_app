import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = (props) => {
    const {dispatch, budget, expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total + item.cost);
    }, 0);

    const updateBudget = (value) => {

        if (isNaN(parseInt(value))) {
            alert("This filed accepts numbers only");
            dispatch({
                type: 'SET_BUDGET',
                payload: budget
            });
            return;
        }

        if (parseInt(value) < totalExpenses) {
            alert("You cannot reduce the budget lower than the expenses");
            dispatch({
                type: 'SET_BUDGET',
                payload: budget
            });
            return;
        }

        if (parseInt(value) > 20000) {
            alert("You cannot add a budget greater than 20000");
            dispatch({
                type: 'SET_BUDGET',
                payload: budget
            });
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(value)
        });
    };

    return (
        <div className="alert alert-secondary">
            <label htmlFor="budget">Budget £: </label>
            <input
                type="number"
                id="budget"
                name="budget"
                onChange={(e) => updateBudget(e.target.value)}
                value={props.budget > 0 ? props.budget : budget}
                step="10"
                max="20000"
                min={totalExpenses}
            />
        </div>
    );
};

export default Budget;
