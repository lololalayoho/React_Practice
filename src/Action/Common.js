export const setPrint = (data) => {
    return (dispatch) => {
        dispatch({
            type : "SET_PRINT",
            payload: data
        })
    }
}
export const setDoing = (data) => {
    return (dispatch) => {
        dispatch({
            type:"SET_DOING",
            payload : data
        })
    }
}