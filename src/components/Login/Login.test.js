import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, BrowserRouter } from 'react-router-dom';
import Login from './Login';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <BrowserRouter>
        <Login />
    </BrowserRouter>
    , div);
    ReactDOM.unmountComponentAtNode(div);
})