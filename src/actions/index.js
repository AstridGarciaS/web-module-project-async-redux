import axios from 'axios'

export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_FAIL = 'FETCH_FAIL'
export const FETCH_START = 'FETCH_START'

export const getBooks = (searchTerm) => {
    return (dispatch) => {
      dispatch(fetchStart());
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyDFn4X2eReTzE7PVVuUC4OSgr_PVgQ6dDQ`)
        .then(res => {
          dispatch(fetchSuccess(res.data.items));
        })
        .catch(err => {
          dispatch(fetchFail(err.message));
        });
    };
  };

export const fetchStart = () => {
    return ({ type: FETCH_START })
}

export const fetchSuccess = (books) => {
    return ({ type: FETCH_SUCCESS, payload: books})
}

export const fetchFail = (err) => {
    return ({ type: FETCH_FAIL, payload: err})
}