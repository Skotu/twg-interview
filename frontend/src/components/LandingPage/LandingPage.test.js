import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom/extend-expect'

import LandingPage from './LandingPage';


describe('LandingPage', () => {
    test('have call to action button', () => {
        const history = createMemoryHistory()

        render(
            <Router history={history}>
                <LandingPage />
            </Router>
        )

        const button = screen.getByText('Start inquiry');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('button');
    })

    test('button leads to /search url', () => {
        const history = createMemoryHistory()

        render(
            <Router history={history}>
                <LandingPage />
            </Router>
        )

        const a = screen.getByText('Start inquiry').closest('a')
        expect(a).toHaveAttribute('href', '/search')
    })
});

