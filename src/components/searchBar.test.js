import React from 'react'
import { render } from '@testing-library/react';
import SearchBar from './searchBar';

describe('<SearchBar /> spec', () => {
    it('renders the component', () => {
        const container = render(<SearchBar />)
        expect(container.firstChild).toMatchSnapshot()
    })
});
