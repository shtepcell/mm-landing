import React from 'react';
import { cn } from '@bem-react/classname';

import { Link } from '../../components/Link';

const cnFooter = cn('Footer');

import './Footer.scss';

export const Footer = React.memo(() => {
    return (
        <footer className={cnFooter()}>
            <div className={cnFooter('LinkList')}>
                <Link className={cnFooter('Link')} view="default">Частным лицам</Link>
                <Link className={cnFooter('Link')} view="default">Физическим лицам</Link>
                <Link className={cnFooter('Link')} view="default">Другим лицам</Link>
            </div>
        </footer>
    )
});
