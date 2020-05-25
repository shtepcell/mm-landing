import React from 'react';
import { cn } from '@bem-react/classname';

import { Icon } from '../../components/Icon';

const cnHeader = cn('Header');

import './Header.scss';

export const Header = React.memo(() => {
    return (
        <header className={cnHeader()}>
            <Icon className={cnHeader('Logo')} type="logo" />
        </header>
    )
});
