import React from 'react';
import { cn } from '@bem-react/classname';

import './Button.scss';

const cnButton = cn('Button');

export const Button = React.memo((props) => {
    const { type, url, view, size, children, className } = props;

    if (type === 'link') {
        return (
            <a className={cnButton({ type, view, size }, [className])} href={url}>
                {children}
            </a>
        );
    }

    return (
        <button className={cnButton({ type, view, size }, [className])} type="button">
            {children}
        </button>
    );
});
