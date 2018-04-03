import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses'

test('should filter by text value', () => {
    const filters = {
        text: "Gum",
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[0], expenses[1]
    ])
});

test('should filter by text value', () => {
    const filters = {
        text: "",
        sortBy: "date",
        startDate: moment(122),
        endDate: undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([
        expenses[0], expenses[1]
    ])

});



// test('should filter by text value', () =>{
//     const filters = {
//
//     };
//     const result = selectExpenses(expenses, filters);
//
// });
// test('should filter by text value', () =>{
//     const filters = {
//
//     };
//     const result = selectExpenses(expenses, filters);
//
// });
// test('should filter by text value', () =>{
//     const filters = {
//
//     };
//     const result = selectExpenses(expenses, filters);
//
// });
// test('should filter by text value', () =>{
//     const filters = {
//
//     };
//     const result = selectExpenses(expenses, filters);
//
// });
// test('should filter by text value', () =>{
//     const filters = {
//
//     };
//     const result = selectExpenses(expenses, filters);
//
// });
// test('should filter by text value', () =>{
//     const filters = {
//
//     };
//     const result = selectExpenses(expenses, filters);
//
// });
// test('should filter by text value', () =>{
//     const filters = {
//
//     };
//     const result = selectExpenses(expenses, filters);
//
// });
// test('should filter by text value', () =>{
//     const filters = {
//
//     };
//     const result = selectExpenses(expenses, filters);
//
// });

// // Get visible expenses
// export default (expenses, {text, sortBy, startDate, endDate}) => {
//     return expenses.filter((expense) => {
//         const createdAtMoment = moment(expense.createdAt);
//         const startDateMatch = startDate ? startDate.isSameOrBefore(expense.createdAt) : true;
//         const endDateMatch = endDate ? endDate.isSameOrAfter(expense.createdAt) : true;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//         return startDateMatch && endDateMatch && textMatch;
//     }).sort((a,b) => {
//         if (sortBy === 'date') {
//             return a.createdAt < b.createdAt ? 1 : -1;
//         } else if (sortBy === 'amount') {
//             // console.log("a.amount = " + a.amount);
//             // console.log("b.amount = " + b.amount);
//             const retval = a.amount < b.amount ? 1 : -1;
//             // console.log("retval = " + retval);
//             return retval;
//         }
//     });
// };
