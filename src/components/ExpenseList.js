import React, {useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import {AppContext} from "../context/AppContext";

const ExpenseList = () => {
    const {expenses} = useContext(AppContext);

    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <td scope="col">Department</td>
                    <td scope="col">Allocated budget</td>
                    <td scope="col">Increase by 10</td>
                    <td scope="col">Delete</td>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => {
                    return <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
                })}
            </tbody>
        </table>
    );
};

export default ExpenseList;

