import React from 'react';
import { cn } from '@bem-react/classname';

import './Content.scss';

const cnContent = cn('Content');

export const Content = React.memo(({ children, withBorder }) => (
    <div className={cnContent({ withBorder })}>
        {children}
    </div>
));
