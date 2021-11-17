import React from 'react'
import { links } from './data.js'
const Sidebar = () => {
    return (
        <>
            <h4>sidebar</h4>
            <ul className="links">
                {links.map((link) => {
                    const { id, url, text } = link
                    return (
                        <li key={id}>
                            <a href={url}>{text}</a>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Sidebar
