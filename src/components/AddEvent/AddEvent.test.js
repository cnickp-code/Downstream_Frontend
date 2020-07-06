import React from 'react';
import ReactDOM from 'react-dom';
import AddEvent from './AddEvent';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AddEvent />, div);
    ReactDOM.unmountComponentAtNode(div);
})