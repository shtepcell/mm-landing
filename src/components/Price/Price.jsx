import React from 'react';
import { cn } from '@bem-react/classname';

import './Price.scss';

const cnPrice = cn('Price');

export const Price = React.memo((props) => {
    const { price, isOnce, className } = props;

    return (
        <div className={cnPrice(null, [className])}>
            <div className={cnPrice('Cost')}>
                {price}
            </div>
            <div className={cnPrice('Postfix')}>
                <div>руб.</div>
                <div className={cnPrice('Month', { hide: isOnce })}>мес.</div>
            </div>
        </div>
    );
});
