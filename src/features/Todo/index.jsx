import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Eat',
            status: 'new',
        },
        {
            id: 2,
            title: 'Code',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Sleep',
            status: 'new',
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, index) => {
        // clone current array to the new one
        const newTodoList = [...todoList];

        console.log(todo, index);

        // toggle state
        const newTodo = {
            ...newTodoList[index],
            status: newTodoList[index].status === 'new' ? 'completed' : 'new',
        };

        newTodoList[index] = newTodo;


        // update toto List
        setTodoList(newTodoList);



    };
    const handleShowAllClick = () => {
        setFilteredStatus('all');
    };
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    };
    const handleShowNewClick = () => {
        setFilteredStatus('new');
    };

    const renderedTodoList = todoList.filter(todo =>
        filteredStatus === 'all' || filteredStatus === todo.status
    );
    // console.log(renderedTodoList);

    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div>
                <button onClick={handleShowAllClick}>Show All</button>
                <button onClick={handleShowCompletedClick}>Show Completed</button>
                <button onClick={handleShowNewClick}>Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;