
const initialState = {
    books: [],
    loading: true,
}

const reducer = (state = initialState, action) => {
    console.log(initialState)

    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                books: action.payload,
                loading: false,
            }
    }
    return state;
}

export default reducer;