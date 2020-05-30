import React, { useCallback } from 'react';
import { cn } from '@bem-react/classname';

import './Link.scss';

const cnLink = cn('Link');

export const Link = React.memo((props) => {
    const { url, view, children, external, className } = props;

    const onClick = useCallback(() => {
        setTimeout(() => window.scrollTo({ top: 0 }), 150);
    }, [url]);

    return (
        <a onClick={onClick} className={cnLink({ view }, [className])} href={external ? url : `#${url}`}>
            {children}
        </a>
    );
});
