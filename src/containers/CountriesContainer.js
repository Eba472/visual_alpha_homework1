import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_COUNTRIES } from '../graphql/get-countries';
import { CountryDisplay } from '../components/Country';

export function CountriesContainer() {
    const { loading, error, data } = useQuery(GET_COUNTRIES);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div className="container">
            {data.Country && data.Country.map(country => 
                <CountryDisplay key={country._id} country={country} />)}
        </div>
    )
}
