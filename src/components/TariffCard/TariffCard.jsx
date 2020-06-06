import React from 'react';
import { cn } from '@bem-react/classname';

import './TariffCard.scss';
import { Price } from '../Price/Price';
import { Button } from '../Button';
import { Icon } from '../Icon';

const cnTariffCard = cn('TariffCard');

const tariffs = {
    rus: {
        title: 'Выгодный интернет-тариф',
        name: 'Россия',
        cost: 399,
        speed: 60,
        desc: 'быстрый Интернет для игр, фильмов и музыки',
        logo: 'car',
    },
    mir: {
        title: 'Лучший интернет-тариф',
        name: 'Мир',
        cost: 490,
        speed: 100,
        desc: 'Интернет без ограничений для всей семьи',
        logo: 'aircraft',
    },
    space: {
        title: 'Крутой интернет-тариф',
        name: 'Космос',
        cost: 699,
        speed: 300,
        desc: 'очень быстрый Интернет для взыскательных пользователей',
        logo: 'rocket',
    },
    start: {
        name: 'Стартовый',
        cost: 0,
        desc: '28 каналов<br/>2 канала HD',
        logo: 'tv_old',
    },
    lite: {
        name: 'Лайт',
        cost: 130,
        desc: '84 канала<br/>4 канала HD',
        logo: 'tv_new',
    },
    'lite+hd': {
        name: 'Лайт + HD',
        cost: 390,
        desc: '105 каналов<br/>26 каналов HD',
        logo: 'pult_white',
    },
    base: {
        name: 'Базовый',
        cost: 290,
        desc: '132 канала<br/>5 каналов HD',
        logo: 'home',
    },
    'base+hd': {
        name: 'Базовый + HD',
        cost: 550,
        desc: '146 каналов<br/>26 канал HD',
        logo: 'star',
    },
};

export const TariffCard = React.memo((props) => {
    const { color, type, className } = props;
    const { title, name, cost, speed, desc, logo } = tariffs[type];

    return (
        <div className={cnTariffCard({ color }, [className])}>
            {title && <div className={cnTariffCard('Title')}>{title}</div>}
            <Icon className={cnTariffCard('Logo', { type: logo })} type={logo} />
            <div className={cnTariffCard('Name')}>{name}</div>
            {speed && (
                <div className={cnTariffCard('Speed')}>
                    {`до ${speed} Мбит/с`}
                </div>
            )}
            <div className={cnTariffCard('Desc')} dangerouslySetInnerHTML={{ __html: desc }} />
            <Price className={cnTariffCard('Cost')} price={cost} />
            <Button view="clear" size="m" className={cnTariffCard('Button')}>
                Заказать
            </Button>
        </div>
    );
});
