import React from "react";

export default function Header() {
    return (
        <header className="page_header">
            <nav className="navigation_container">
                <div className="menu">
                    <div className="nav_upper">
                        <div className="tabAndLogoContainer">
                            <div className="insider_tabContainer">
                                <div className="user_avatar">
                                    <img className = "img_user" src="./img/in.png" />
                                </div>
                                <div className="user_link">
                                    <a href="#" style={{ textDecoration: "none" }} >Sign in</a>
                                    <span> | </span>
                                    <a href="#" style={{ textDecoration: "none" }} >Join</a>
                                </div>
                            </div>
                            <a className="logo" href="/">
                                <img className = "img_logo" src = "./img/Marvel.png" />
                            </a>
                            <div className="right-link">
                                <div className="tabContainer">
                                    <a className="searchPromo_tab">
                                        <div className = "icon_u">
                                        <img className = "searchPromo_img" src = "./img/icon-mu-shield.png"/>
                                        </div>
                                        <div className="searchPromo_wrap">
                                            <p>Marvel Unlimited</p>
                                            <span>Subscribe</span>
                                        </div>
                                    </a>
                                </div>
                                <div className="search_tabContainer">
                                    <a>
                                        <div className = "icon_s">
                                        <img className = "img_search" src="./img/Search.png" />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav_lower">
                        <ul className="linkContainer">
                            <li className="linkWrapper">
                                <a  className = "nav_link" href="#" style={{ textDecoration: "none" }}>
                                    VIDEOS
                                </a>
                            </li>
                            <li className="linkWrapper">
                                <a className = "nav_link" href="#" style={{ textDecoration: "none" }}>
                                    CHARACTERS
                                </a>
                            </li>
                            <li className="linkWrapper">
                                <a  className = "nav_link" href="#" style={{ textDecoration: "none" }}>
                                    COMICS
                                </a>
                            </li>
                            <li className="linkWrapper">
                                <a className = "nav_link" href="#" style={{ textDecoration: "none" }}>
                                    MOVIES
                                </a>
                            </li>
                            <li className="linkWrapper">
                                <a className = "nav_link" href="#" style={{ textDecoration: "none" }}>
                                    TV SHOWS
                                </a>
                            </li>
                            <li className="linkWrapper">
                                <a className = "nav_link" href="#" style={{ textDecoration: "none" }}>
                                    GAMES
                                </a>
                            </li>
                            <li className="linkWrapper">
                                <a className = "nav_link" href="#" style={{ textDecoration: "none" }}>
                                    NEWS
                                </a>
                            </li>
                            <li className="linkWrapper">
                                <a className = "nav_link" href="#" style={{ textDecoration: "none" }}>
                                    MORE
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
