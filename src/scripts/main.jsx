import '../styles/main.scss';
import '../index.html';

import React from 'react';
import ReactDom from 'react-dom';

import AppComponent from './components/app';

ReactDom.render(
    <AppComponent/>,
    document.querySelector('#app')
);
