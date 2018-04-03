import React from 'react';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';

import ExpenseListItem from './ExpenseListItem';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>Please add some Expenses</p>
            ) : (
                props.expenses.map((e) => {
                    return <ExpenseListItem key={e.id} {...e}{...props} />
                })
            )
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);
