import React from 'react';
import { cn } from '@bem-react/classname';

import './TariffCard.scss';
import { Price } from '../Price/Price';
import { Button } from '../Button';

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
};

export const TariffCard = React.memo((props) => {
    const { color, type, className } = props;
    const { title, name, cost, speed, desc, logo } = tariffs[type];

    return (
        <div className={cnTariffCard({ color }, [className])}>
            <div className={cnTariffCard('Title')}>{title}</div>
            <div className={cnTariffCard('Logo', { type: logo })} />
            <div className={cnTariffCard('Name')}>{name}</div>
            <div className={cnTariffCard('Speed')}>
                {`до ${speed} Мбит/с`}
            </div>
            <div className={cnTariffCard('Desc')}>{desc}</div>
            <Price className={cnTariffCard('Cost')} price={cost} />
            <Button view="clear" size="m" className={cnTariffCard('Button')}>
                Заказать
            </Button>
        </div>
    );
});
