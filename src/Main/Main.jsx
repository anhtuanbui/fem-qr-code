import React, { Component } from 'react';
import qrCode from '../images/image-qr-code.png';
import './Main.scss';

export default class Main extends Component {
    render() {
        return (
            <main>
                <div className="card">
                    <div className="card__qr-code">
                        <img src={qrCode} alt="qr code" />
                    </div>
                    <h1 className='card__title'>Improve your front-end skills by building projects</h1>
                    <p className="card__description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </main>
        )
    }
}
