import React from 'react';
import { cn } from '@bem-react/classname';

import './Link.scss';

const cnLink = cn('Link');

export const Link = React.memo((props) => {
    const { url, view, children, className } = props;
    const href = url ? `#${url}` : undefined;

    // const onClick = useCallback(() => {
    //     if (url) {
    //         setTimeout(() => window.scrollTo({ top: 0 }), 150);
    //     }
    // }, [url]);

    return (
        <a className={cnLink({ view }, [className])} href={href}>
            {children}
        </a>
    );
});
