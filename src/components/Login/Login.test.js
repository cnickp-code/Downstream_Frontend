import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Login />, div);
    ReactDOM.unmountComponentAtNode(div);
})