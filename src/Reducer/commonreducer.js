const initialState = {
    print : "",
    doing : ""
}
export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;

        case "SET_PRINT":
            return {
                ...state,
                print : action.payload
            } 
        case "SET_DOING":
            return {
                ...state,
                doing : action.payload
            }
    }
}