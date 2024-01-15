import React, { useEffect, useState } from 'react'
import { Box, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks } from '@/redux/actions/taskAction'
import { toast } from 'react-toastify'
import ListView from './views/listView'
import BoardView from './views/boardView'
import { getAllProjects } from '@/redux/actions/admin/project-action'
import { getAllEmployees } from '@/redux/actions/admin/employee-action'

const MyTask = ({ userInfo }) => {
    const [userTasks, setUserTask] = useState([])
    const [open, setOpen] = useState(false)
    const [view, setView] = useState(1)
    const dispatch = useDispatch()
    const { tasks, error, actionT, message } = useSelector(state => state.taskReducer)
    const { projects, error: err, actionT: at, message: msg } = useSelector(state => state.projectReducer)

    useEffect(() => {
        dispatch(getTasks())
    }, [dispatch])

    useEffect(() => {
        if (error && actionT === "fetch-tasks") {
            toast.error(message)
        } else if (!error && actionT === "fetch-tasks") {
            console.log(tasks, userInfo)
            if (tasks && tasks !== null && tasks !== undefined && tasks !== "" && tasks.length > 0 && userInfo && userInfo !== null && userInfo !== undefined && userInfo !== "" && Object.keys(userInfo).length > 0) {
                const filteredTasks = tasks.filter(task => task.assignedTo.includes(userInfo._id));
                setUserTask(filteredTasks)
            }
        }
    }, [error, actionT, tasks, message, userInfo])

    useEffect(() => {
        dispatch(getAllProjects())
        dispatch(getAllEmployees())
    }, [])



    return (
        <>
            <Box>
                <Box mt={4} className="tab-container">
                    <Button className={`tab ${view === 1 ? 'active' : ''}`} onClick={() => setView(1)}>List</Button>
                    <Button className={`tab ${view === 2 ? 'active' : ''}`} onClick={() => setView(2)}>Board</Button>
                </Box>
                <Box mt={2}>
                    {view === 1 ? <ListView tasks={userTasks} projects={projects} /> : view === 2 ? <BoardView tasks={userTasks} projects={projects} /> : null}
                </Box>
            </Box>
        </>
    )
}

export default MyTask