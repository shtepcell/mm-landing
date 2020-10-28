import React from 'react';
import { cn } from '@bem-react/classname';

import { Link } from '../../components/Link';

import './Footer.scss';

const cnFooter = cn('Footer');

export const Footer = React.memo(() => (
    <footer className={cnFooter()}>
        <div className={cnFooter('LinkList')}>
            <Link className={cnFooter('Link', { main: true })} view="default" url="/about">О компании</Link>
            <Link className={cnFooter('Link')} view="default" url="/about">О нас</Link>
        </div>
        <div className={cnFooter('LinkList')}>
            <Link className={cnFooter('Link', { main: true })} view="default">Услуги</Link>
            <Link className={cnFooter('Link')} view="default" url="/internet">Интернет</Link>
            <Link className={cnFooter('Link')} view="default" url="/iptv">IPTV</Link>
            <Link className={cnFooter('Link')} view="default" url="/more">Дополнительные услуги</Link>
            <Link className={cnFooter('Link')} view="default" url="/devices">Оборудование</Link>
        </div>
        <div className={cnFooter('Copyryting')}>
            <div className={cnFooter('CompanyLogo')} />
            © ООО «БИТ», 2020
        </div>
    </footer>
));
