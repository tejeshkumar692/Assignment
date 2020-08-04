import React from 'react'
import { render } from '@testing-library/react';
import SearchPage from './searchPage';

describe('<SearchPage /> spec', () => {
    it('renders the component', () => {
        const container = render(<SearchPage />)
        expect(container.firstChild).toMatchSnapshot()
    })
});
