import React from 'react'
import TodoApp from './TodoApp';


export default function Widget() {
    return (
        <div className='bg-stone-300 rounded-2xl shadow-md p-4 w-fit h-fit mx-auto mt-8'>
            <h1 className=' text-center font-bold text-2xl my-3'>Tasks</h1>
            <TodoApp></TodoApp>
        </div>
    );
}