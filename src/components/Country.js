import React from 'react';

export function CountryDisplay({ country }) {
    return (
        <div className="country">
            <table>
                <tr>
                    <td>{country.flag.emoji}</td>
                    <td>{country.name}</td>
                    <td>{country.capital}</td>
                    <td>{country.area}</td>
                    <td>{country.population}</td>

                </tr>
            </table>
        </div>
    )
}
