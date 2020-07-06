import React from 'react';
import ReactDOM from 'react-dom';
import SearchFab from './SearchFab';

it('renders', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchFab />, div);
    ReactDOM.unmountComponentAtNode(div);
})