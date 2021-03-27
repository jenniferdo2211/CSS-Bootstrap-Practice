import * as React from 'react';
import './Intro.css';

export const Intro = () => (
    <div id="intro" class="row">
        <div class="col-lg-6 justify-content-md-end">
            <h1>Meet new and interesting dogs nearby.</h1>
            <button type="button" class="btn btn-dark btn-lg me-md-4"><i class="fab fa-apple"></i> Download</button>
            <button type="button" class="btn btn-outline-light btn-lg"><i class="fab fa-google-play"></i> Download</button>
        </div>
        <div class="col-lg-6">
            <img class="intro-image" src="/images/iphone6.png" alt="iphone-mockup" />
        </div>
    </div>
);