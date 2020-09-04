export const setFlash = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_FLASH",
            payload: data
        })
    }
}

export const setLoading = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_LOADING",
            payload: data
        });
    }
}