import React from 'react';
import ReactDOM from 'react-dom';
import Splash from './Splash';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Splash />, div);
    ReactDOM.unmountComponentAtNode(div);
})