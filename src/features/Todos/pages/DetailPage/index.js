import React from 'react';
import { useParams } from 'react-router-dom';
DetailPage.propTypes = {

};

function DetailPage(props) {
    const { todoId } = useParams();
    return (
        <div>
            <h2>Detail Page</h2>
        </div>
    );
}

export default DetailPage;