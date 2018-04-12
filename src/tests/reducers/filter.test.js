import moment from 'moment'
import filterReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('set text filter', () => {
    const text = 'e';
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text });
    expect(state).toEqual({
        text,
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('set startDate', () => {
    const startDate = moment();
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate });
    expect(state.startDate).toEqual(startDate);
});

test('set endDate', () => {
    const endDate = moment();
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate });
    expect(state.endDate).toEqual( endDate );
});