import moment from 'moment';
import {
    setEndDate,
    setStartDate,
    sortByDate,
    setTextFilter,
    sortByAmount
} from '../../actions/filters';

test('set End Date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('set Start Date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('set Text Filter with text', () => {
    const action = setTextFilter("filter text");
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'filter text'
    });
});

test('set Text Filter without text', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should set up sort by date action', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should set up sort by amount action', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});