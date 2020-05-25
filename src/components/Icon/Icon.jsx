import React from 'react';
import { cn } from '@bem-react/classname';

const cnIcon = cn('Icon');

import './Icon.scss';

export const Icon = React.memo((props) => {
    const { type, className } = props;

    return (
        <span className={cnIcon({ type }, [className])} />
    )
});