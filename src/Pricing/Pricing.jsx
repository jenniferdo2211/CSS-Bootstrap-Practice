import * as React from 'react';
import "./Pricing.css";

export const Pricing = () => (
    <section id="pricing" class="row text-center">

        <h2>A Plan for Every Dog's Needs</h2>
        <p>Simple and affordable price plans for your and your dog.</p>


        <div class="col-lg-4 col-md-6 pricing-card">
            <div class="card">
                <div class="card-header">
                    <h3>Chihuahua</h3>
                </div>
                <div class="card-body">
                    <h2>Free</h2>
                    <p>5 Matches Per Day</p>
                    <p>10 Messages Per Day</p>
                    <p>Unlimited App Usage</p>
                    <button type="button" class="w-100 btn btn-lg btn-outline-dark">Sign Up</button>
                </div>
            </div>
        </div>

        <div class="col-lg-4 col-md-6 pricing-card">
            <div class="card">
                <div class="card-header">
                    <h3>Labrador</h3>
                </div>
                <div class="card-body">
                    <h2>$49 / mo</h2>
                    <p>Unlimited Matches</p>
                    <p>Unlimited Messages</p>
                    <p>Unlimited App Usage</p>
                    <button type="button" class="w-100 btn btn-lg btn-dark">Sign Up</button>
                </div>
            </div>
        </div>

        <div class="col-lg-4 pricing-card">
            <div class="card">
                <div class="card-header">
                    <h3>Mastiff</h3>
                </div>
                <div class="card-body">
                <h2>$99 / mo</h2>
                    <p>Pirority Listing</p>
                    <p>Unlimited Matches</p>
                    <p>Unlimited Messages</p>
                    <p>Unlimited App Usage</p>
                    <button type="button" class="w-100 btn btn-lg btn-dark">Sign Up</button>
                </div>
            </div>
        </div>

    </section>
);