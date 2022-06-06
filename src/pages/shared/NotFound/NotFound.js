import React from 'react';
import notF from '../../../image/NotF.jpg';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
    return (
        <div>
            <PageTitle title="Page Not Found"></PageTitle>
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