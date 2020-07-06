import React from 'react';
import ReactDOM from 'react-dom';
import EventOverlay from './EventOverlay';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<EventOverlay />, div);
    ReactDOM.unmountComponentAtNode(div);
})