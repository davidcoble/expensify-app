import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test('should render a Summary with no expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render a Summary with one expense', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render a Summary with many expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});
