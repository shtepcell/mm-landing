import React from 'react';
import { cn } from '@bem-react/classname';

import './Icon.scss';

const cnIcon = cn('Icon');

export const Icon = React.memo((props) => {
    const { type, className } = props;

    return (
        <span className={cnIcon({ type }, [className])} />
    );
});
