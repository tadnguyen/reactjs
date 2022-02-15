import React, { useEffect, useState } from "react";
import Card from "./Card";
import { baseUrl, urlCharacters } from "./api";

export default function Body() {
  const apiCharacter = baseUrl + urlCharacters;
  const [cards, setCards] = useState();
  const getCard = async () => {
    const response = await fetch(apiCharacter);
    const data = await response.json();
    setCards(data.data.results);
    // console.log(data);
  };
  // console.log(cards);
  useEffect(() => {
    getCard();
  }, []);
  return (
    <div className="page_content">
      <div className="promo-1">
        <div className="promo">
          <div className="promo_wrapper">
            <div className="promo_content">
              <div className="promo_content_main">
                <div className="promo_title">
                  REWARD YOUR MARVEL FANDOM WITH
                </div>
              </div>
              <div className="img_wrapper promo_logo">
                <img className="promo_img" src="./img/insiderlogo.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="masthead-2">
        <div className="masthead_miniBackground">
          <div className="masthead_wrapper">
            <div className="masthead_background_wrapper">
              <div className="masthead_background">
                <div
                  className="built_background"
                  style={{ backgroundImage: "url(./img/characters_art.jpg)" }}
                />
              </div>
            </div>
            <div className="masthead_hero">
              <div className="masthead_main">
                <div className="masthead_container">
                  <span className="masthead_headline">Marvel characters</span>
                  <div className="masthead_copy">
                    Get hooked on a hearty helping of heroes and villains from
                    the humble House of Ideas!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content_grid-3">
        <div className="content-grid">
          <div className="content-grid-top">
            <div className="inlineModuleHeader">
              <div className="inlineModuleHeader_titleWrapper">
                <h3>Marvel Characters List</h3>
              </div>
              <div className="inlineModuleHeader_innerComponent">
                <div className="content-grid-top_nav"></div>
              </div>
            </div>
            <div className="grid-base-6">
              {cards?.map((card) => {
                return (
                  <Card
                    key={card.id}
                    id={card.id}
                    img={card.thumbnail.path + "/portrait_xlarge.jpg"}
                    cname={card.name}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
