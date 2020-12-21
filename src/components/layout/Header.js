import React from 'react';
import { Link } from 'react-router-dom'


export function Header() {
    return (
        <header>
            <h1 style={headerStyle}>Country List</h1>
            <span style={{ display: "flex", paddingBottom: "30px", fontSize: "20px"}} >
            <Link style={linkStyle} to="/">Table</Link> |
            <Link style={linkStyle} to="/emojis">Emoji List</Link>
            </span>
        </header>
    )
}
export function TableHeader() {
    return (
        <table style={{paddingBottom: "20px", fontSize: "20px" }}>
            <tr>
                <th>Flag</th>
                <th>Name</th>
                <th>Capital city</th>
                <th>Area</th>
                <th>Population</th>
            </tr>
        </table>
    )
}
const headerStyle = {
    background: "#333",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}
const linkStyle = {
    color: '#000',
    textDecoration: 'none',
    marginLeft: "auto",
    marginRight: "auto",
}
