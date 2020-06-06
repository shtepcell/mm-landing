import React, { useEffect } from 'react';
import { cn } from '@bem-react/classname';

import { Title } from '../../components/Title';
import { TariffCard } from '../../components/TariffCard';
import { Card } from '../../components/Card/Card';

import './IptvPage.scss';

const cnIptvPage = cn('IptvPage');

export const IptvPage = React.memo(() => {
    useEffect(() => {
        window.scroll({ top: 0 });
    }, []);

    return (
        <div className={cnIptvPage()}>
            <Title level={1}>Тарифы на интернет</Title>
            <Title level={2}>Тарифные планы для многоэтажных домов</Title>
            <div className={cnIptvPage('Tariffs')}>
                <TariffCard className={cnIptvPage('TariffCard')} color="darkBlue" type="start" />
                <TariffCard className={cnIptvPage('TariffCard')} color="mintGreen" type="lite" />
                <TariffCard className={cnIptvPage('TariffCard')} color="mint" type="lite+hd" />
                <TariffCard className={cnIptvPage('TariffCard')} color="purpule" type="base" />
                <TariffCard className={cnIptvPage('TariffCard')} color="blue" type="base+hd" />
            </div>
            <div className={cnIptvPage('Cards')}>
                <Card className={cnIptvPage('Card')} logo="pause" text="Функция паузы" />
                <Card className={cnIptvPage('Card')} logo="clock" text="Архив передач 7 дней с возможностью поиска" />
                <Card className={cnIptvPage('Card')} logo="arrow" text="Просмотр на сматфоне, компьютере, Smart TV или через приставку" />
                <Card className={cnIptvPage('Card')} logo="like" text="Цифровое качество" />
                <Card className={cnIptvPage('Card')} logo="24" text="Круглосуточная техподдержка" />
                <Card className={cnIptvPage('Card')} logo="pult" text="Аренда оборудования для просмотра ТВ" />
            </div>
        </div>
    );
});
