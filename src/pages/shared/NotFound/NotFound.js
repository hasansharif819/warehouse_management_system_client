import React from 'react';
import notF from '../../../image/NotF.jpg';

const NotFound = () => {
    return (
        <div>
            <h2>404</h2>
            <h2>Page Not Found</h2>
            <br />
            <h2>The Page you want to journey that is not Found</h2>
            <h2>Sorry</h2>
            <img height={700} width={1000} src={notF} alt="" />
        </div>
    );
};

export default NotFound;