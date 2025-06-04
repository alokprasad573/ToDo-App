import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from 'uuid';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AddTodo() {
    
    const [tasks, setTasks] = React.useState([
         { id: uuidv4(), task: "Buy groceries", isDone: false },
         { id: uuidv4(), task: "Complete homework", isDone: false },
         { id: uuidv4(), task: "Clean the house", isDone: false },
         { id: uuidv4(), task: "Prepare dinner", isDone: false },
         { id: uuidv4(), task: "Exercise", isDone: false },
         { id: uuidv4(), task: "Call mom", isDone: false },
         { id: uuidv4(), task: "Pay bills", isDone: false },
        { id: uuidv4(), task: "Walk the dog", isDone: false },
         { id: uuidv4(), task: "Organize workspace", isDone: false },
         { id: uuidv4(), task: "Plan weekend trip", isDone: false },
         { id: uuidv4(), task: "Attend meeting", isDone: false },
        { id: uuidv4(), task: "Read a book",isDone: false },
         { id: uuidv4(), task: "Write a blog post", isDone: false },
         { id: uuidv4(), task: "Practice coding", isDone: false },
         { id: uuidv4(), task: "Update resume", isDone: false },
         { id: uuidv4(), task: "Learn a new skill", isDone: false },
         { id: uuidv4(), task: "Grocery shopping", isDone: false },
         { id: uuidv4(), task: "Attend workshop", isDone: false },
         { id: uuidv4(), task: "Volunteer at local shelter", isDone: false }
    ]);
    const [newTask, setNewTask] = React.useState("");

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, { id: uuidv4(), task: newTask, isDone: false }]);
            setNewTask("");
        }
    }

    const deleteTask = (id) => {
        return () => {
            setTasks(tasks.filter((task) => task.id !== id));
        }
    }

    const markDone = (id) => { 
        return () => {
            setTasks(tasks.map((task) => 
                task.id === id ? { ...task, isDone: !task.isDone } : task
            ));
        }
    }

    const addNewTask = (event) => {
        setNewTask(event.target.value);
    }

    return (
    <div>
        <div className="mx-auto mt-4 flex flex-row gap-4 px-4">
        <Box sx={{ width: 400, maxWidth: '100%' }}>
            <TextField 
            fullWidth 
            value={newTask} 
            label="Enter Task To Add" 
            id="fullWidth" 
            onChange={addNewTask}/>
        </Box>
        <Button 
        variant="contained" 
        color="primary" 
        className="rounded-full max-w-fit" 
        onClick={addTask}>
            <span className="material-symbols-outlined">add_task</span>
        </Button>
    </div>
    <div>
        <ul>
            {tasks.map((task) => (
                <li key={task.id} className="flex flex-row justify-between my-4 mx-4">
                    <span className="flex flex-row items-center">
                        <input type="checkbox" className="w-5 h-5 mx-2 my-2" onChange={markDone(task.id)}/>
                        {(task.isDone) ? <p className="font-[700] font-3xl text-gray-600 line-through">{task.task}</p> : <p className="font-[700] font-3xl">{task.task}</p>}
                    </span>
                    <DeleteIcon onClick={deleteTask(task.id)}/>
                </li>
            ))}
        </ul>
    </div>
    </div>    
    );
}
