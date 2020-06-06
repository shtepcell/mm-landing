import React, { useEffect } from 'react';
import { cn } from '@bem-react/classname';

import { Title } from '../../components/Title';
import { TariffCard } from '../../components/TariffCard';
import { Card } from '../../components/Card/Card';

import './InternetPage.scss';

const cnInternetPage = cn('InternetPage');

export const InternetPage = React.memo(() => {
    useEffect(() => {
        window.scroll({ top: 0 });
    }, []);

    return (
        <div className={cnInternetPage()}>
            <Title level={1}>Тарифы на интернет</Title>
            <Title level={2}>Тарифные планы для многоэтажных домов</Title>
            <div className={cnInternetPage('Tariffs')}>
                <TariffCard className={cnInternetPage('TariffCard')} color="green" type="rus" />
                <TariffCard className={cnInternetPage('TariffCard')} color="red" type="mir" />
                <TariffCard className={cnInternetPage('TariffCard')} color="blue" type="space" />
            </div>
            <div className={cnInternetPage('Cards')}>
                <Card className={cnInternetPage('Card')} logo="free" text="Бесплатное подключение" />
                <Card className={cnInternetPage('Card')} logo="clock" text="Ежедневная транкзакция" />
                <Card className={cnInternetPage('Card')} logo="arrow" text="Бесплатная смена тарифа" />
                <Card className={cnInternetPage('Card')} logo="time" text="Обещанный платеж" />
                <Card className={cnInternetPage('Card')} logo="24" text="Круглосуточная техподдержка" />
                <Card className={cnInternetPage('Card')} logo="pause" text="Бесплатная приостановка услуги" />
            </div>
        </div>
    );
});
