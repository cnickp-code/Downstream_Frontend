import React from 'react';
import ReactDOM from 'react-dom';
import SpotlightEvent from './SpotlightEvent';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SpotlightEvent />, div);
    ReactDOM.unmountComponentAtNode(div);
})