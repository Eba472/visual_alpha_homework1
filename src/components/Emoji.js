import React from 'react';
import { Button, Popup} from 'semantic-ui-react'


export function Emoji({ country }) {
    const PopupExample = () => (
    <Popup
        trigger={<Button content={country.flag.emoji} />}
    >
        <Popup.Header>Country: {country.name}</Popup.Header>
        <Popup.Content>
                Capital city is {country.capital}. Land area is {country.area}. Total population is {country.population}. 
        </Popup.Content>
        
    </Popup>
    )
    return (
        <PopupExample/>
    )
}
