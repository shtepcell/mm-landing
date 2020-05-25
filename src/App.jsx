import ReactDOM from 'react-dom';
import React from 'react';
import { cn } from '@bem-react/classname';

import { Header } from './features/Header';
import { Content } from './features/Content';
import { Footer } from './features/Footer';
import './App.scss';

const cnApp = cn('App');

ReactDOM.render(
    <div className={cnApp()}>
        <Header />
        <Content />
        <Footer />
    </div>,
    document.getElementById('react-root'),
);
