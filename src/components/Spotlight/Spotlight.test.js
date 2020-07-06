import React from 'react';
import ReactDOM from 'react-dom';
import Spotlight from './Spotlight';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Spotlight />, div);
    ReactDOM.unmountComponentAtNode(div);
})