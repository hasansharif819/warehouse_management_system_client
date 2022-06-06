import React from 'react';
import Helmet from 'react-helmet';

const PageTitle = ({title}) => {
        return (
            <Helmet>
                <title> {title}-Smart-Zone</title>
            </Helmet>
        );
};

export default PageTitle;