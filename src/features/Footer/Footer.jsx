import React from 'react';
import { cn } from '@bem-react/classname';

import { Link } from '../../components/Link';

import './Footer.scss';

const cnFooter = cn('Footer');

export const Footer = React.memo(() => (
    <footer className={cnFooter()}>
        <div className={cnFooter('LinkList')}>
            <Link className={cnFooter('Link', { main: true })} view="default">О компании</Link>
            <Link className={cnFooter('Link')} view="default">О нас</Link>
            <Link className={cnFooter('Link')} view="default">Документы</Link>
        </div>
        <div className={cnFooter('LinkList')}>
            <Link className={cnFooter('Link', { main: true })} view="default">Услуги</Link>
            <Link className={cnFooter('Link')} view="default">Интернет</Link>
            <Link className={cnFooter('Link')} view="default">IPTV</Link>
            <Link className={cnFooter('Link')} view="default">Дополнительные услуги</Link>
            <Link className={cnFooter('Link')} view="default">Оборудование</Link>
        </div>
    </footer>
));
