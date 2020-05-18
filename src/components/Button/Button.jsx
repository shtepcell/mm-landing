import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '@bem-react/classname';

const cnButton = cn('Button');

import './Button.scss';

export const Button = React.memo((props) => {
    const { type, url, view, children, className } = props;

    if (type === 'link') {
        return (
            <a className={cnButton({ type, view }, [className])} href={url}>
                {children}
            </a>
        )
    }

    return (
        <button  className={cnButton({ type, view }, [className])}>
            {children}
        </button>
    )
});

Button.propTypes = {
    url: PropTypes.string,

    type: PropTypes.oneOf(['link']),

    view: PropTypes.oneOf(['default']),

    size: PropTypes.oneOf(['m', 'xl']),
};

// export default Button;