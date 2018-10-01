import React from 'react';

import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div>

            </div>
            <div className="toolbar__logo">
                <a href = "/">Daniel R. Shook</a>
            </div>
            <div className="spacer"/>
            <div className="toolbar__navigation-items">
                <ul>
                    <li>
                        <a href = "/">About</a>
                    </li>
                    <li>
                        <a href = "/">Artwork</a>

                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;
