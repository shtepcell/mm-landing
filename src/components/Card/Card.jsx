import React from 'react';
import { cn } from '@bem-react/classname';

import { Icon } from '../Icon';

import './Card.scss';

const cnCard = cn('Card');

export const Card = React.memo(({ logo, text, className }) => (
    <div className={cnCard(null, [className])}>
        <Icon type={logo} className={cnCard('Icon')} />
        <div className={cnCard('Text')}>{text}</div>
    </div>
));
