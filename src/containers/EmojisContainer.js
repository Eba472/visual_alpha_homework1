import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_COUNTRIES } from '../graphql/get-countries'
import { Emoji } from '../components/Emoji'

export function EmojisContainer() {
    const { loading, error, data } = useQuery(GET_COUNTRIES)
    if (loading) return 'Loading...'
    if (error) return `Error! ${error.message}`

    return (
        <div className="emoji_div">
            {data.Country && data.Country.map(country =>
                <Emoji key={country._id} country={country} />)}
        </div>
    )
}
