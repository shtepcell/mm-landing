import ReactDOM from 'react-dom';
import React from 'react';
import { Button } from './components/Button';
import { Link } from './components/Link';

ReactDOM.render(
    <div>
        <Button view="action">
            Подключить
        </Button>
        <Link view="default">
            Перейти по ссылке
        </Link>
    </div>,
    document.getElementById("react-root")
)