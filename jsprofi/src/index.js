import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/* App компонент рендерится в index.js, где мы с помощью библиотеки ReactDOM.render 
 и метода render выводим компонент в ДОМ-дерево
 Мы можем сдесь использовать компонент App как обычный компонент
 и передавать ему атрибуты, например title
 */

ReactDOM.render(<App title={'I am from props!'}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
