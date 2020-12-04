import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';

ListPage.propTypes = {

};

function ListPage(props) {
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

const localtion = useLocation();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(localtion.search);
        console.log(params);

        return params.status || 'all';
    });





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

export default ListPage;