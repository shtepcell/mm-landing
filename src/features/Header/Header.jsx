import React from 'react';
import { cn } from '@bem-react/classname';

const cnHeader = cn('Header');

import './Header.scss';

export const Header = React.memo(() => {
    return (
        <header className={cnHeader()}>
            HEader
        </header>
    )
});
