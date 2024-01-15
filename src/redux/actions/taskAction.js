import actionTypes from "./actionTypes";

export const getTasks = (id) => async (dispatch) => {
    try {
        const response = await fetch('/api/get-tasks')
        const { success, tasks, message } = await response.json()
        if (success) {
            dispatch({ type: actionTypes.GET_TASKS_SUCCESS, payload: tasks })
        } else if (!success) {
            dispatch({ type: actionTypes.GET_TASKS_FAILURE, payload: message })
        }
    } catch (error) {
        dispatch({ type: actionTypes.GET_TEAMS_FAILURE, payload: error })
    }
}