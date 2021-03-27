import * as React from 'react';
import "./Testinomials.css";

export const Testinomials = () => (
    <section id="testimonials" class="pink-section">

        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
            <div class="carousel-inner">
                <div class="carousel-item active testinomial">
                    <h2>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
                    <img class="testinomial-img" src="images/dog-img.jpg" alt="dog-profile" />
                    <em>Pebbles, New York</em>
                </div>
                <div class="carousel-item testinomial">
                    <h2 class="testimonial-text">My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
                    <img class="testinomial-img" src="images/lady-img.jpg" alt="lady-profile" />
                    <em>Beverly, Illinois</em>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        
    </section>
);