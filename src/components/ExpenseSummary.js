import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpenseTotal from '../selectors/expenses-total';

export const ExpenseSummary = (props) => {
    const number = props.expenses.length;
    const totalAmount = selectExpenseTotal(props.expenses);
    return (
        <div>
            {
                number === 0 ? (
                    <p>Viewing no expenses</p>
                ) : (
                    <p>
                        Viewing {number} expense{number > 1 && 's'} totalling {numeral(totalAmount / 100).format('$0,0.00')}.
                    </p>
                )
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);
