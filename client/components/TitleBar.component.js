/**
 * Implements the title bar with the bride and groom names and the wedding date.
 *
 * id (string): Identifier for the element
 */

'use strict';

import React from 'react';

class TitleBar extends React.Component {

    render() {
        return (
            <header id={this.props.id} className="titlebar">
                <span className="bride-name">Maryke</span>
                <span className="groom-name">&nbsp;
                    <span>&amp;</span> David
                </span>
                <div className="wedding-date">25<sup>st</sup> May, 2018</div>
            </header>
        );
    }
}



export default TitleBar;
