import React, { useEffect } from 'react';
import { cn } from '@bem-react/classname';

import { Title } from '../../components/Title';
import { Price } from '../../components/Price';
import { Button } from '../../components/Button';

import './MorePage.scss';

const cnMorePage = cn('MorePage');

const commonServices = [
    {
        name: 'Предоставление Статического IP',
        cost: 150,
    },
    {
        name: 'Вызов мастера на дом и настройка интернет-оборудования (приобретённого в Миранда-медиа), IP-TV и телефонии',
        cost: 0,
    },
    {
        name: 'Безлимитная ночь',
        cost: 20,
    },
    {
        name: 'Турбосутки',
        cost: 40,
    },
    {
        name: 'Компьютерная помощь',
        cost: 0,
    },
];


const homeNetServices = [
    {
        name: 'Замена кабеля вне зоны квартиры пользователя',
        cost: 0,
    },
    {
        name: 'Прокладка/ремонт кабеля на территории квартиры без стоимости короба, до 15 метров',
        cost: 0,
    },
    {
        name: 'Кабель (дополнительный материал свыше 15 метров на территории квартиры), за 1 метр',
        cost: 20,
    },
];


export const MorePage = React.memo(() => {
    useEffect(() => {
        window.scroll({ top: 0 });
    }, []);

    return (
        <div className={cnMorePage()}>
            <Title level={1}>Дополнительные услуги</Title>
            <Title level={2}>Общие</Title>
            <div className={cnMorePage('List')}>
                {commonServices.map(({ name, cost }, index) => (
                    <div key={`commonService-${index}`} className={cnMorePage('Item')}>
                        <div className={cnMorePage('ItemName')}>{name}</div>
                        <div className={cnMorePage('Container')}>
                            <div className={cnMorePage('ItemCost')}>
                                <Price price={cost} />
                            </div>
                            <Button className={cnMorePage('Button')} view="clear" size="m">
                                Заказать
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <br />
            <br />
            <Title level={2}>Домашняя сеть</Title>
            <div className={cnMorePage('List')}>
                {homeNetServices.map(({ name, cost }, index) => (
                    <div key={`commonService-${index}`} className={cnMorePage('Item')}>
                        <div className={cnMorePage('ItemName')}>{name}</div>
                        <div className={cnMorePage('Container')}>
                            <div className={cnMorePage('ItemCost')}>
                                <Price price={cost} />
                            </div>
                            <Button className={cnMorePage('Button')} view="clear" size="m">
                                Заказать
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});
