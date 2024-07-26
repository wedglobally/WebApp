import React from 'react'
import card1Img from '../../../../../assets/websiteasset/img/Groomsmen-1.png'
import card2Img from '../../../../../assets/websiteasset/img/Groom.jpg'
import card3Img from '../../../../../assets/websiteasset/img/attendance-bg.png'
import './card.css'

export default function card() {
    return (
        <div>
            <div className="cards">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card1">
                            <div className="img-card">
                                <img src={card1Img} alt="restagleImg" />
                            </div>
                            <div className="card-info">
                                <span>All You Need to Start</span>
                                <p>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                                <a href="#">Ecommerce for Wordpress ›</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card2">
                            <div className="img-card">
                                <img src={card2Img} alt="card1Img" />
                            </div>
                            <div className="card-info">
                                <span>All You Need to Start</span>
                                <p>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                                <a href="#">Ecommerce for Wordpress ›</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card3">
                            <div className="img-card">
                                <img src={card3Img} alt="card1Img" />
                            </div>
                            <div className="card-info">
                                <span>All You Need to Start</span>
                                <p>Add WooCommerce plugin to any WordPress site and set up a new store in minutes.</p>
                                <a href="#">Ecommerce for Wordpress ›</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
