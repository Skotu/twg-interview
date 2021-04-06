import { render, screen } from '@testing-library/react';

import SearchResults from './SearchResults';


describe('SearchResults', () => {
    const data = [
        {
            familyId: 4520, groupId: 0, name: 'Category name 0', products: [{
                typeId: 3121, groupId: 123413, name: 'Test product 0 '
            }]
        },
        {
            familyId: 32110, groupId: 3213, name: 'Category name 1', products: [
                {
                    typeId: 1, groupId: 321, name: 'Test product 1'
                },
                {
                    typeId: 1, groupId: 3211, name: 'Test product 2'
                }
            ]
        },
        {
            familyId: 32110, groupId: 3213, name: 'Category name 1', products: [
                {
                    typeId: 21, groupId: 3621, name: 'Test product 3'
                },
                {
                    typeId: 11, groupId: 3241, name: 'Test product 4'
                },
                {
                    typeId: 131, groupId: 32641, name: 'Test product 5'
                },
                {
                    typeId: 1313, groupId: 326441, name: 'Test product 6'
                }
            ]
        },
    ];

    test('with some resutls has correct main css class', () => {
        render(
            <SearchResults data={data} />
        )

        const searchResults = screen.getByTestId('searchresult');
        expect(searchResults).toHaveClass('SearchResults');
    });

    test('shows no results when feeded with empty table', () => {
        render(
            <SearchResults data={[]} />
        )

        const noResults = screen.getByText('No results');
        expect(noResults).toBeInTheDocument()
    });

    test('renders correct number of categories', () => {
        render(
            <SearchResults data={data} />
        )

        const categories = screen.getAllByTestId('searchresult-category')
        expect(categories.length).toEqual(3)
    });

    test('renders correct number of products', () => {
        render(
            <SearchResults data={data} />
        )

        const categories = screen.getAllByTestId('searchresult-product')
        expect(categories.length).toEqual(7)
    })
});

