import React from "react";

export default function Footer() {
  return (
    <footer className="page_footer">
      <footer className="main-footer">
        <div className="main-footer__full-content">
          <div className="main-footer__links">
            <a className="main-footer__logo">
              <img className="footer_logo" src="./img/Mm.png" />
            </a>
            <nav className="main-footer__primary-links">
              <ul>
                <li className="main-footer__link">About Marvel</li>
                <li className="main-footer__link">Help/FAQs</li>
                <li className="main-footer__link">Careers</li>
                <li className="main-footer__link">Internships</li>
              </ul>
            </nav>
            <nav className="main-footer__secondary-links">
              <ul>
                <li className="main-footer__link">Advertising</li>
                <li className="main-footer__link">Disney+</li>
                <li className="main-footer__link">Marvellhq.com</li>
                <li className="main-footer__link">Redeem Digital Comics</li>
              </ul>
            </nav>
          </div>
          <nav className="main-footer__promo-links">
            <div className="main-footer__promotion">
              <a className="main-footer__promotion-link">
                <div className="main-footer__promotion-image-wrapper">
                  <img className="in" src="./img/insiderlogo.png" />
                </div>
                <div className="main-footer__promotion-info">
                  <h4 className="main-footer__promotion-title">
                    Marvel Insider
                  </h4>
                  <p className="main-footer__promotion-description">
                    Get Rewarded for Being a Marvel Fan
                  </p>
                </div>
              </a>
            </div>
            <div className="main-footer__promotion">
              <a className="main-footer__promotion-link">
                <div className="main-footer__promotion-image-wrapper">
                  <img
                    className="out"
                    src="./img/mu-logo-w-nav-2x-2021-02.png"
                  />
                </div>
                <div className="main-footer__promotion-info">
                  <h4 className="main-footer__promotion-title">
                    Marvel Unlimited
                  </h4>
                  <p className="main-footer__promotion-description">
                    Access Over 29,000+ Digital Comics
                  </p>
                </div>
              </a>
            </div>
          </nav>
          <nav className="main-footer__follow">
            <h4 className="main-footer__title">Follow Marvel</h4>
            <ul className="footer_social">
              <li className="footer_social_img">
                <a href="http://facebook.com/marvel">
                  <img className="social_img" src="./img/fbook.png" />
                </a>
              </li>
              <li className="footer_social_img">
                <a href="http://twitter.com/marvel">
                  <img className="social_img" src="./img/t.png" />
                </a>
              </li>
              <li className="footer_social_img">
                <a href="http://instargram.com/marvel">
                  <img className="social_img" src="./img/insta.png" />
                </a>
              </li>
              <li className="footer_social_img">
                <a href="http://marvelentertainment.tumblr.com">
                  <img className="social_img" src="./img/tum.png" />
                </a>
              </li>
              <li className="footer_social_img">
                <a href="http://youtube.com/marvel">
                  <img className="social_img" src="./img/yt.png" />
                </a>
              </li>
              <li className="footer_social_img">
                <a href="http://snapchat.com/add/marvelhq">
                  <img className="social_img" src="./img/sn.png" />
                </a>
              </li>
              <li className="footer_social_img">
                <a href="http://printerest.com/marvelofficial">
                  <img className="social_img" src="./img/pint.png" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main-footer__legal-wrapper">
          <nav className="main-footer__legal-main">
            <p className="main-footer__legal-text">Term of Use</p>
            <p className="main-footer__legal-text">Privacy Policy</p>
            <p className="main-footer__legal-text">
              Your California Privacy Rights
            </p>
            <p className="main-footer__legal-text">Do Not Sell My Info</p>
            <p className="main-footer__legal-text">
              Children's Online Privacy Policy
            </p>
            <p className="main-footer__legal-text">License Agreement</p>
            <p className="main-footer__legal-text">Interest-Based Ads</p>
            <p className="main-footer__legal-text">Marvel Insider Terms</p>
            <p className="main-footer__legal-text">@2022 MARVEL</p>
          </nav>
        </div>
      </footer>
    </footer>
  );
}
