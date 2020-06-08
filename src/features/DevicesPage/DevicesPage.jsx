import React, { useEffect } from 'react';
import { cn } from '@bem-react/classname';

import devices from './devices.json';
import { Button } from '../../components/Button';
import { Title } from '../../components/Title';
import { Price } from '../../components/Price';


import './DevicesPage.scss';

const cnDevicesPage = cn('DevicesPage');

export const DevicesPage = React.memo(() => {
    useEffect(() => {
        window.scroll({ top: 0 });
    }, []);

    return (
        <div className={cnDevicesPage()}>
            <Title level={1}>Оборудование</Title>
            <div className={cnDevicesPage('List')}>
                {devices.map(({ id, name, description, price }) => (
                    <div key={id} className={cnDevicesPage('Item')}>
                        <div className={cnDevicesPage('ItemLeft')}>
                            <div className={cnDevicesPage('Photo', { device: id })} />
                        </div>
                        <div className={cnDevicesPage('ItemRight')}>
                            <div className={cnDevicesPage('Name')}>
                                {name}
                            </div>
                            <div className={cnDevicesPage('Description')}>
                                {description}
                            </div>
                            <Price className={cnDevicesPage('Price')} price={price} isOnce />
                            <Button className={cnDevicesPage('Button')} view="action" size="m">
                                Купить
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});
