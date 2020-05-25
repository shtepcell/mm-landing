import React from 'react';
import { cn } from '@bem-react/classname';

import './Button.scss';

const cnButton = cn('Button');

export const Button = React.memo((props) => {
    const { type, url, view, children, className } = props;

    if (type === 'link') {
        return (
            <a className={cnButton({ type, view }, [className])} href={url}>
                {children}
            </a>
        );
    }

    return (
        <button className={cnButton({ type, view }, [className])} type="button">
            {children}
        </button>
    );
});
