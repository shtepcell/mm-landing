import React from 'react';
import { cn } from '@bem-react/classname';

import './Price.scss';

const cnPrice = cn('Price');

export const Price = React.memo((props) => {
    const { price, className } = props;

    return (
        <div className={cnPrice(null, [className])}>
            <div className={cnPrice('Cost')}>
                {price}
            </div>
            <div className={cnPrice('Postfix')}>
                <div>руб.</div>
                <div>мес.</div>
            </div>
        </div>
    );
});
