import React from 'react'
import './Index.css'

export default function Index() {
    return (
        <>
            <div className="pages">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <ul>
                                <span>Woocommerce</span>
                                <li>Features</li>
                                <li>Payments</li>
                                <li>Marketing</li>
                                <li>Shipping</li>
                                <li>Extension Store</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <span>Other products</span>
                                <li>Storefront</li>
                                <li>WooSlider</li>
                                <li>Sensei</li>
                                <li>Sensei Extensions</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <span>Support</span>
                                <li>Documentation</li>
                                <li>Customizations</li>
                                <li> Support Policy</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <ul>
                                <span>We recommend</span>
                                <li>WooExperts</li>
                                <li>Hosting Solutions</li>
                                <li>Pre-sales FAQ</li>
                                <li>Success Stories</li>
                                <li>Design Feedback Group</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
