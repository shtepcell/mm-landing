import React from 'react';
import { cn } from '@bem-react/classname';

import './Link.scss';

const cnLink = cn('Link');

export const Link = React.memo((props) => {
    const { url, view, children, className } = props;

    return (
        <a className={cnLink({ view }, [className])} href={url}>
            {children}
        </a>
    );
});
