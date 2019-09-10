import * as actionTypes from './actions';

const initialState = {
    persons: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PERSON_ADDED:
            return {
                ...state,
                persons: state.persons.concat({
                    id: Math.random(),
                    name: 'Max',
                    age: Math.floor( Math.random() * 40 )
                })
            }
        case actionTypes.PERSON_DELETED:
            const updatedArray = state.persons.filter(person => person.id !== action.personId);
            return {
                ...state,
                persons: updatedArray
            }
        default:
            return state;
    }
}

export default reducer;