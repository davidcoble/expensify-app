import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpenseSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            {
                expenseCount === 0 ? (
                    <h3>Viewing no expenses</h3>
                ) : (
                    <h3>
                        Viewing {expenseCount} {expenseWord} totalling {formattedTotal}.
                    </h3>
                )
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }

};

export default connect(mapStateToProps)(ExpenseSummary);
