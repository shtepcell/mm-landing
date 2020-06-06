import ReactDOM from 'react-dom';
import React from 'react';
import { cn } from '@bem-react/classname';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Header } from './features/Header';
import { Content } from './features/Content';
import { Footer } from './features/Footer';
import { InternetPage } from './features/InternetPage';
import { IptvPage } from './features/IptvPage';
import { AboutPage } from './features/AboutPage';
import { MorePage } from './features/MorePage';

import './App.scss';

const cnApp = cn('App');

ReactDOM.render(
    <HashRouter>
        <div className={cnApp()}>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Content>
                        main
                    </Content>
                </Route>
                <Route path="/internet">
                    <Content>
                        <InternetPage />
                    </Content>
                </Route>
                <Route path="/iptv">
                    <Content>
                        <IptvPage />
                    </Content>
                </Route>
                <Route path="/about">
                    <Content>
                        <AboutPage />
                    </Content>
                </Route>
                <Route path="/more">
                    <Content>
                        <MorePage />
                    </Content>
                </Route>
                <Route path="*">
                    <Content withBorder>
                        404
                    </Content>
                </Route>
            </Switch>
            <Footer />
        </div>
    </HashRouter>,
    document.getElementById('react-root'),
);
