import moment from 'moment';

// Get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(expense.createdAt) : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(expense.createdAt) : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            // console.log("a.amount = " + a.amount);
            // console.log("b.amount = " + b.amount);
            const retval = a.amount < b.amount ? 1 : -1;
            // console.log("retval = " + retval);
            return retval;
        }
    });
};
