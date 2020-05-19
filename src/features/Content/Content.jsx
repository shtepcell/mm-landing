import React from 'react';
import { cn } from '@bem-react/classname';

const cnContent = cn('Content');

import './Content.scss';

export const Content = React.memo(() => {
    return (
        <div className={cnContent()}>
            Content
        </div>
    )
});
