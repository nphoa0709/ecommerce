import React from 'react';
import { Route, Routes } from 'react-router-dom'
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';

TodoFeature.prototype = {};

function TodoFeature(props) {

    return (
        <>
            <Routes>
                <Route path="/" element={<ListPage />} exact></Route>
                <Route path="/:todoId" element={<DetailPage />}></Route>
            </Routes>
        </>
    );
}

export default TodoFeature;