import React from 'react';
import './ImageBanner.css';
/* istanbul ignore next */
function ImageBanner(props) {
    return (
        <div style={{height: 400}}>
            <div className="hero-image">
                <div className="hero-text">
                    <h1 style={{fontSize: "50px"}}>{props.title}</h1>
                    <p>{props.description}</p>
                    <button onClick={event => {
                        event.preventDefault();
                        window.location.href = "/login"
                    }}>{props.textButton}</button>
                </div>
            </div>
        </div>
    );
}

export default ImageBanner;