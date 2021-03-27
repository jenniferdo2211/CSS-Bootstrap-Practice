import * as React from 'react';
import './TitleSection.css';
import {NavBar} from './NavBar/NavBar';
import {Intro} from './Intro/Intro';

export const TitleSection = () => (
    <section id="title" class="pink-section">
        <div class="container-fluid">
            <NavBar />
            <Intro />
        </div>
    </section>
);