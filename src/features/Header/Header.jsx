import React from 'react';
import { cn } from '@bem-react/classname';

import { Icon } from '../../components/Icon';
import { Link } from '../../components/Link';


import './Header.scss';

const cnHeader = cn('Header');

export const Header = React.memo(() => (
    <header className={cnHeader()}>
        <nav className={cnHeader('Tab')}>
            <Icon className={cnHeader('Logo')} type="logo" />
            <div className={cnHeader('Nav')}>
                <Link className={cnHeader('Link')} url="/internet">Интернет</Link>
                <Link className={cnHeader('Link')} url="/iptv">IPTV</Link>
                <Link className={cnHeader('Link')} url="/more">Доп. услуги</Link>
                <Link className={cnHeader('Link')} url="/devices">Оборудование</Link>
                <Link className={cnHeader('Link')} url="/about">О нас</Link>
                <Link className={cnHeader('Link')}>Документы</Link>
            </div>
        </nav>
        <div className={cnHeader('Promo')} />
    </header>
));
