import React from 'react';
import { cn } from '@bem-react/classname';

import { Link } from '../../components/Link';

import './Footer.scss';

const cnFooter = cn('Footer');

export const Footer = React.memo(() => (
    <footer className={cnFooter()}>
        <div className={cnFooter('LinkList')}>
            <Link className={cnFooter('Link')} view="default">Частным лицам</Link>
            <Link className={cnFooter('Link')} view="default">Физическим лицам</Link>
            <Link className={cnFooter('Link')} view="default">Другим лицам</Link>
        </div>
    </footer>
));
