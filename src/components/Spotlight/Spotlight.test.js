import React from 'react';
import ReactDOM from 'react-dom';
import Spotlight from './Spotlight';
import { BrowserRouter } from 'react-router-dom';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <Spotlight />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
})