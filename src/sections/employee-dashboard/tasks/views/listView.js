import React from 'react'
import { Box, Chip } from '@mui/material'
import month from '@/data/month'

const ListView = ({ tasks, projects }) => {
    const setPriority = (p) => {
        if (p === "high") {
            return <><Chip label="High" color='error' /></>
        } else if (p === "medium") {
            return <><Chip label="Medium" color='warning' /></>
        } else if (p === "low") {
            return <><Chip label="Low" color='success' /></>
        }
    }

    const formatDate = (d) => {
        return <>{`${d.split('T')[0].split("-")[2]} ${month[Number(d.split('T')[0].split("-")[1]) - 1]}, ${d.split('T')[0].split("-")[0]}`}</>
    }

    const setProject = (p) => {
        const filteredProject = projects.filter(project => project._id === p)
        return (<>{filteredProject[0]?.projectName}</>)
    }

    return (
        <>
            {
                tasks && tasks !== null && tasks !== undefined && tasks !== "" && tasks.length > 0 && projects && projects !== null && projects !== undefined && projects !== "" && projects.length > 0 && <Box className="table-responsive">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Task name</th>
                                <th>Priority</th>
                                <th>Due date</th>
                                <th>Project</th>
                                <th>Collaborator</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tasks.map((task, index) => <tr>
                                    <td>{index + 1}</td>
                                    <td>{task.taskName}</td>
                                    <td>{setPriority(task.priority)}</td>
                                    <td>{formatDate(task.taskDueDate)}</td>
                                    <td>{setProject(task.project)}</td>
                                    <td></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </Box>
            }
        </>
    )
}

export default ListView