import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../TodoList/style.scss';
TodoList.propTypes = {
    todoList: PropTypes.array,
    onToDoClick: PropTypes.func

};
TodoList.defaultProps = {
    todoList: [],
    onToDoClick: null
}
function TodoList(props) {
    const { todoList, onToDoClick } = props
    const handleTodoClick = (todo, idx) => {
        if (!onToDoClick) return;
        onToDoClick(todo, idx);
    }
    return (
        <ul className='todo-list'>

            {todoList.map((todo, idx) => (
                <li key={todo.id}
                    className={classNames({
                        "todo-item": true,
                        completed: todo.status === "completed"
                    })}
                    onClick={() => handleTodoClick(todo, idx)}

                >{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;