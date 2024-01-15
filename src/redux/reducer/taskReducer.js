import actionTypes from "../actions/actionTypes";

const initialState = {
    task: null,
    tasks: null,
    error: false,
    message: "",
    actionT: ""
}

export const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.CREATE_TASK_SUCCESS:
            return { ...state, message: payload, error: false, actionT: "create" }

        case actionTypes.CREATE_TASK_FAILURE:
            return { ...state, message: payload, error: true, actionT: "create" }

        case actionTypes.GET_TASKS_SUCCESS:
            return { ...state, tasks: payload, error: false, actionT: "fetch-tasks" }

        case actionTypes.GET_TASKS_FAILURE:
            return { ...state, tasks: null, error: true, actionT: "fetch-tasks" }

        default:
            return state
    }
}