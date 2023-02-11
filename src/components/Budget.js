import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget_Max_Value = 20000;

const Budget = () => {
    const { budget, totalExpenses, currency, dispatch } = useContext(AppContext);

    const onChangeBudgetHandler = (event) => {
        const enteredValue = Number(event.target.value);

        if (Number.isNaN(enteredValue)) {
            alert('Please enter a valid number');
            return;
        }

        if (!Number.isInteger(enteredValue)) {
            alert('Please enter an integer number');
            return;
        }

        if (enteredValue < totalExpenses) {
            alert(
                "The value of the budget cannot be lower than the expenses value" + currency + totalExpenses);
        } else {
            if (enteredValue > Budget_Max_Value) {
                alert('Please enter a value less than' + Budget_Max_Value);
                return;
            }

            dispatchEvent({
                type: 'SET_BUDGET',
                payload: enteredValue,
            });
        }
    };

    return (
        <div
          className="alert alert-secondary"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <div>
            <label htmlFor="budget"> Budget:</label>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>{currency}</span>
            <input
              required="required"
              type="number"
              id="budget"
              value={budget}
              step="10"
              onChange={onChangeBudgetHandler}
            ></input>
          </div>
        </div>
      );
    };

export default Budget;