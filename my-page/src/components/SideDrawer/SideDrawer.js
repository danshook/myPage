import React from 'react';

import "./SideDrawer.css";

const sideDrawer = props => (
    <nav className="sideDrawer">
        <ul>
            <li>
                <a href= "/">About</a>
            </li>
            <li>
                <a href= "/">Artwork</a>
            </li>
        </ul>
    </nav>
);

export default sideDrawer;