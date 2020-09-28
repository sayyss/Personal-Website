import React, {useState} from 'react'
import '../styles/intro.css'
import ReactPageScroller from 'react-page-scroller';
import "./overrides.css";

export default function Intro() {

    return (
        <div className="SimpleMain">
        <ReactPageScroller>

            <div className="section">
                <div className="section1">
                <h1>Hello, I am Sayam Sawai</h1>

                </div>
            </div>

            <div className="section2">
                <p>Section 2</p>
            </div>

            <div className="section3">
                <p>Section 2</p>
            </div>

        </ReactPageScroller>
        </div>

    );
}
