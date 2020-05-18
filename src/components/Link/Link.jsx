import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

const cnLink = cn('Link');

import './Link.scss';

export const Link = React.memo((props) => {
    const { url, view, children, className } = props;

    return (
        <a className={cnLink({ view }, [className])} href={url}>
            {children}
        </a>
    )
});

Link.propTypes = {
    url: PropTypes.string,

    view: PropTypes.oneOf(['default']),

    size: PropTypes.oneOf(['m', 'xl']),
};

// export default Link;