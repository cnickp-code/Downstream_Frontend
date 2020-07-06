import React from 'react';
import ReactDOM from 'react-dom';
import EventButtons from './EventButtons';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventButtons />, div);
    ReactDOM.unmountComponentAtNode(div);
})