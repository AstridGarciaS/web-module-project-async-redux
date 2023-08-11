import { Switch } from 'react-router-dom/cjs/react-router-dom.min'
import data from './../components/Book'

const initialState = {
    book: data,
    loading: false,
    err:""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return(state);
    }
}

export default reducer; 