import Head from "./Head.jsx";
import {Link} from "react-router-dom";

export default function Detail01() {

    return (
        <>
            <Head/>
            <div className="page-heading header-text">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Modern Warfare® II</h3>
                            <span className="breadcrumb"><Link to="/">Home</Link> {">"} <Link
                                to="/games">Games</Link> {">"} Game Details</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="single-product section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="left-image">
                                <img src="public/assets/images/single-game.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center">
                            <h4>Call of Duty®: Modern Warfare® II</h4>
                            <span className="price"><em>$28</em> $22</span>
                            <p></p>
                            <form id="qty" action="#">
                                <input type="qty" className="form-control" id="1" aria-describedby="quantity"
                                       placeholder="1"/>
                                <button type="submit"><i className="fa fa-shopping-bag"></i> ADD TO CART</button>
                            </form>
                            <ul>
                                <li><span>Game ID:</span> COD MMII</li>
                                <li><span>Genre:</span> <Link to="/category_action">Action</Link></li>
                                <li><span>Multi-tags:</span> <Link to="/category_action">Action</Link> </li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="sep"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="more-info">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tabs-content">
                                <div className="row">
                                    <div className="nav-wrapper ">
                                        <ul className="nav nav-tabs" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="description-tab"
                                                        data-bs-toggle="tab" data-bs-target="#description" type="button"
                                                        role="tab" aria-controls="description"
                                                        aria-selected="true">Description
                                                </button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="reviews-tab" data-bs-toggle="tab"
                                                        data-bs-target="#reviews" type="button" role="tab"
                                                        aria-controls="reviews" aria-selected="false">Reviews (3)
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="myTabContent">
                                        <div className="tab-pane fade show active" id="description" role="tabpanel"
                                             aria-labelledby="description-tab">
                                            <p>In Call of Duty: Modern Warfare, players will be thrust into an immersive narrative spanning the entire game.
                                                Experience the ultimate online playground with classic multiplayer,
                                                or squad-up and play cooperatively in a collection of elite operations accessible to all skill levels.</p>
                                        </div>
                                        <div className="tab-pane fade" id="reviews" role="tabpanel"
                                             aria-labelledby="reviews-tab">
                                            <p>Coloring book air plant shabby chic, crucifix normcore raclette cred swag
                                                artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut
                                                kitsch helvetica jean shorts edison bulb poutine next level humblebrag
                                                la croix adaptogen.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section categories related-games">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Related Games</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-button">
                                <Link to="/category">View All</Link>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/categories-01.jpg"
                                                                        alt=""/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/categories-05.jpg"
                                                                        alt=""/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/categories-03.jpg"
                                                                        alt=""/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Action</h4>
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/categories-04.jpg"
                                                                        alt=""/></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-sm-6 col-xs-12">
                            <div className="item">
                                <h4>Adventure</h4>
                                <div className="thumb">
                                    <Link to="/product"><img src="public/assets/images/categories-05.jpg"
                                                                        alt=""/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="container">
                    <div className="col-lg-12">
                        <p>Copyright © 2024 ZONE. All rights reserved. &nbsp;&nbsp;</p>
                    </div>
                </div>
            </footer>
        </>
    )
}