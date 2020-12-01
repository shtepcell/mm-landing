import React, { useEffect } from 'react';
import { cn } from '@bem-react/classname';

import { Title } from '../../components/Title';
import { Link } from '../../components/Link';

import './AboutPage.scss';

const cnAboutPage = cn('AboutPage');

export const AboutPage = React.memo(() => {
    useEffect(() => {
        window.scroll({ top: 0 });
    }, []);

    return (
        <div className={cnAboutPage()}>
            <Title level={1}>О нас</Title>
            <div className={cnAboutPage('Content')}>
                <div>
                    ООО «БИТ» (тороговая марка – Мой домашний интернет) предлагает выделенный доступ
                    к ресурсам сети Интернет с использованием собственных каналов передачи данных,
                    обеспечивающих мгновенный доступ к российскому и зарубежному сегментам сети и
                    высокоскоростную передачу больших объемов трафика, а также доступ к любому
                    информационному и мультимедийному контенту глобальной сети Интернет. Компания
                    обладает собственной волоконно-оптической сетью на территории России
                    протяженностью более 1700 км. В 6-ти городах России на сегодняшний день
                    оказываются услуги по предоставлению ШПД в сеть интернет на базе технологий FTTB
                    (FTTH) и телефонии.
                </div>
                <div className={cnAboutPage('Bold')}>
                    Наша миссия: Мы создаем полный спектр решений в области телекоммуникационных
                    технологий, которые позволяют нашим клиентам идти в ногу со временем.
                </div>
                <div>
                    У нас работают только квалифицированные специалисты, которые всегда готовы
                    прийти к вам на помощь. «Мой домашний интернет» - надежный поставщик
                    телекоммуникационных услуг как для бизнеса, так и для дома! И мы готовы к
                    сотрудничеству с Вами!
                </div>
                <div style={{ margin: '24px 0' }}>
                    <Link
                        size="l"
                        view="blue"
                        url="/static/user_agreement.pdf"
                        target="_blank"
                        external
                    >
                        Политика конфиденциальности
                    </Link>
                </div>
            </div>
        </div>
    );
});
