import {createStore} from 'redux';

// Action Generators
const incrementCount = ({inc = 1}={}) => ({
        type: 'INCREMENT',
        by: inc
});

const decrementCount = ({dec = 1}={}) => {
    return {
        type: 'DECREMENT',
        by: dec
    }
};
const setCount = ({val = 0}={}) => {
    return {
        type: 'SET',
        val: val
    }
};
const resetCount = () => {
    return setCount(0);
};

// Reducers
// 1. Reducers are pure functions
//    a. output is determined by input only=
// 2. Never change state or action
const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const inc = typeof action.by === 'number' ? action.by : 1;
            return {
                count: state.count + inc
            };
        case 'DECREMENT':
            const dec = typeof action.by === 'number' ? action.by : 1;
            return {
                count: state.count - dec
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.val
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsub = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({inc: 5}));
store.dispatch(incrementCount());
store.dispatch(incrementCount());
store.dispatch(resetCount())
store.dispatch(decrementCount());
store.dispatch(decrementCount({dec: 10}));
store.dispatch(setCount({val: 101}));

