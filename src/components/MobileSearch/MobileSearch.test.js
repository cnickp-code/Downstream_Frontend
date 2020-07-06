import React from 'react';
import ReactDOM from 'react-dom';
import MobileSearch from './MobileSearch';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MobileSearch />, div);
    ReactDOM.unmountComponentAtNode(div);
})