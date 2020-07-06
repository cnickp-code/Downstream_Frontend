import React from 'react';
import ReactDOM from 'react-dom';
import News from './News';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<News />, div);
    ReactDOM.unmountComponentAtNode(div);
})