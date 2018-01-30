import React, { Component } from 'react';
import { render } from 'react-dom';
import '../css/style.css';

export default class Hello extends Component {
    render() {
        return (
            <div>
                Hello from react

        <p>
                    <img src='./img/kal-baby.jpg' />
                </p>
            </div>

        );
    }
}

render(<Hello />, document.getElementById('content'));