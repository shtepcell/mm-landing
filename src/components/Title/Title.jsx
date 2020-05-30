import React from 'react';
import { cn } from '@bem-react/classname';

import './Title.scss';

const cnTitle = cn('Title');

export const Title = React.memo((props) => {
    const { level, children, className } = props;

    return (
        <a className={cnTitle({ level }, [className])}>
            {children}
        </a>
    );
});
