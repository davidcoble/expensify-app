import {addExpense, removeExpense, editExpense} from '../../actions/expenses';
import uuid from "uuid";

test('should setup remove expense action object', () => {
    const action = removeExpense({id: 'my_test_id'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'my_test_id'
    })
});

test('should setup edit expense action object', () => {
    const action = editExpense('my_test_id', {note: 'this is a new note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'my_test_id',
        updates: {
            note: 'this is a new note'
        }
    })
});

test('should set up add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 12300,
        createdAt: 123456789,
        note: "test note"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            note: "",
            description: "",
            createdAt: 0,
            amount: 0,
            id: expect.any(String)
        }
    });
});