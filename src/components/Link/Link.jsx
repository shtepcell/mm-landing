import React from 'react';
import { cn } from '@bem-react/classname';

import './Link.scss';

const cnLink = cn('Link');

export const Link = React.memo((props) => {
    const { url, view, children, className, external, target, size } = props;
    let href = url ? `#${url}` : undefined;

    href && external && (href = url);

    // const onClick = useCallback(() => {
    //     if (url) {
    //         setTimeout(() => window.scrollTo({ top: 0 }), 150);
    //     }
    // }, [url]);

    return (
        <a className={cnLink({ view, size }, [className])} href={href} target={target}>
            {children}
        </a>
    );
});
