import * as React from 'react';
import "./Features.css";

export const Features = () => (
    <section id="features" class="row">
        <div class="col-lg-4 feature">
            <i class="fas fa-check-circle fa-4x feature-icon"></i>
            <h3>Easy to use</h3>
            <p>So easy to use, even your dog could do it.</p>
        </div>

        <div class="col-lg-4 feature">
            <i class="fas fa-bullseye fa-4x feature-icon"></i>
            <h3>Elite Clientele</h3>
            <p>We have all the dogs, the greatest dogs.</p>
        </div>

        <div class="col-lg-4 feature">
            <i class="fas fa-heart fa-4x feature-icon"></i>
            <h3>Guaranteed to work</h3>
            <p>Find the love of your dog's life or your money back.</p>
        </div>

    </section>
);