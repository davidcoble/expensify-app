import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render a Summary with no expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={0} expensesTotal={0}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render a Summary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={5} expensesTotal={230974523048}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render a Summary with many expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={999}/>);
    expect(wrapper).toMatchSnapshot();
});
