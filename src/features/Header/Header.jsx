import React from 'react';
import { cn } from '@bem-react/classname';

import { Icon } from '../../components/Icon';

import './Header.scss';

const cnHeader = cn('Header');

export const Header = React.memo(() => (
    <header className={cnHeader()}>
        <Icon className={cnHeader('Logo')} type="logo" />
    </header>
));
