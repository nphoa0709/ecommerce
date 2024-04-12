import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TodoList from '../../components/TodoList/index';
import queryString from 'query-string';

function ListPage() {
    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status: "completed"
        },
        {
            id: 2,
            title: "Code",
            status: "new"
        },
        {
            id: 3,
            title: "Sleep",
            status: "new"
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() => {
        const params = queryString.parse(window.location.search);
        return params.status || 'all';
    });

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setFilteredStatus(searchParams.get('status') || 'all');
    }, [searchParams]);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };
        newTodoList[idx] = newTodo;
        setTodoList(newTodoList);
    };

    const handleShowAllClick = () => {
        setSearchParams({ status: 'all' });
    };

    const handleShowCompletedClick = () => {
        setSearchParams({ status: 'completed' });
    };

    const handleShowNewClick = () => {
        setSearchParams({ status: 'new' });
    };

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);

    return (
        <>
            <div>
                <h3>Todo List</h3>
                <TodoList todoList={renderedTodoList} onToDoClick={handleTodoClick}></TodoList>
            </div>
            <div>
                <button onClick={handleShowAllClick}>All</button>
                <button onClick={handleShowCompletedClick}>Completed</button>
                <button onClick={handleShowNewClick}>New</button>
            </div>
        </>
    );
}

export default ListPage;




// import React, { useEffect, useState } from 'react';
// import { useLocation, useMatch, useHistory } from "react-router-dom";
// import TodoList from '../../components/TodoList/index';
// import queryString from 'query-string'
// function ListPage(props) {
//     const initTodoList = [
//         {
//             id: 1,
//             title: "Eat",
//             status: "completed"
//         },
//         {
//             id: 2,
//             title: "Code",
//             status: "new"
//         },
//         {
//             id: 3,
//             title: "Sleap",
//             status: "new"
//         },
//     ];

//     const match = useMatch();
//     const history = useHistory();
//     const location = useLocation();
//     const [todoList, setTodoList] = useState(initTodoList);
//     const [filteredStatus, setFilteredStatus] = useState(() => {
//         const param = queryString.parse(location.search);
//         console.log(param);
//         return param.status || 'all'
//     });

//     useEffect(()=>{
//         const params = queryString.parse(location.search);
//         setFilteredStatus(params.status || "all");
//     }, [location.search]);
//     const handleTodoClick = (todo, idx) => {
//         console.log(todo, idx);
//         //clone current array to new array
//         const newTodoList = [...todoList];
//         const newTodo = {
//             ...newTodoList[idx],
//             status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
//         }
//         newTodoList[idx] = newTodo;
//         setTodoList(newTodoList);
//     }

//     const handleShowAllClick = () => {
//         //  setFilteredStatus("all")
//         const queryParams = { status: "all" };
//         history.push({
//             pathname: match.path,
//             search: queryString.stringify(queryParams),
//         })

//     }
//     const handleShowCompletedClick = () => {
//         const queryParams = { status: "completed" };
//         history.push({
//             pathname: match.path,
//             search: queryString.stringify(queryParams),
//         })
//     }
//     const handleShowNewClick = () => {
//         const queryParams = { status: "new" };
//         history.push({
//             pathname: match.path,
//             search: queryString.stringify(queryParams),
//         })
//     }
//     const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status)


//     return (
//         <>
//             <div>
//                 <h3>Todo List</h3>
//                 <TodoList todoList={renderedTodoList} onToDoClick={handleTodoClick}></TodoList>
//             </div>
//             <div>
//                 <button onClick={handleShowAllClick}>All</button>
//                 <button onClick={handleShowCompletedClick}>Completed</button>
//                 <button onClick={handleShowNewClick}>New</button>
//             </div>
//         </>
//     );
// }
