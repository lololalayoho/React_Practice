const initialState = {
    flash: "초기값",
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type){
        default:
            return state;

        case "SET_FLASH":
            return {
                ...state,
                flash: action.payload
            }

        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload
            }

    }
}