import React from 'react'
import './discount.css'

function discount(){
    return(
        <div>
            <div class="background">
        <div class="container">
            <div class="panel pricing-table">
            
            <div class="pricing-plan">
                <img src="https://raw.githubusercontent.com/deep882001/JARDS-Hackathon-team/main/JARDS/paper-plane.png" alt="" class="pricing-img"></img>
                <h2 class="pricing-header">Silver</h2>
                <ul class="pricing-features">
                <li class="pricing-features-item">10% Off on every shipment</li>
                <li class="pricing-features-item">Ground Shipping</li>
                <li class="pricing-features-item">UPS Worldwide Expedited</li>
                </ul>
                <span class="pricing-price">$150</span>
                <a href="#/" class="pricing-button">Purchase</a>
            </div>
            
            <div class="pricing-plan">
                <img src="https://raw.githubusercontent.com/deep882001/JARDS-Hackathon-team/main/JARDS/seaplane.png" alt="" class="pricing-img"></img>
                <h2 class="pricing-header">Gold</h2>
                <ul class="pricing-features">
                <li class="pricing-features-item">15% Off on every shipment</li>
                <li class="pricing-features-item">Overnight Shipping</li>
                <li class="pricing-features-item">UPS Worldwide Express</li>
                </ul>
                <span class="pricing-price">$250</span>
                <a href="#/" class="pricing-button is-featured">Purchase</a>
            </div>
            
            <div class="pricing-plan">
                <img src="https://raw.githubusercontent.com/deep882001/JARDS-Hackathon-team/main/JARDS/rocket.png" alt="" class="pricing-img"></img>
                <h2 class="pricing-header">Platinum</h2>
                <ul class="pricing-features">
                <li class="pricing-features-item">25% Off on every shipment</li>
                <li class="pricing-features-item">Overnight Shipping</li>
                <li class="pricing-features-item">UPS Worldwide Express Plus</li>
                </ul>
                <span class="pricing-price">$350</span>
                <a href="#/" class="pricing-button">Purchase</a>
            </div>
            
            </div>
        </div>
        </div>
        </div>
    );
}

export default discount

