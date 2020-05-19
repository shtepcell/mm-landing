import ReactDOM from 'react-dom';
import React from 'react';
import { cn } from '@bem-react/classname';

import { Header } from './features/Header';
import { Content } from './features/Content';
import { Footer } from './features/Footer';

const cnApp = cn('App');

import './App.scss';

ReactDOM.render(
    <div className={cnApp()}>
        <Header />
        <Content />
        <Footer />
    </div>,
    document.getElementById("react-root")
)