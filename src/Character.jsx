import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiKey, urlCharactersDetail, baseUrl, urlStories } from "./api";

export default function Character() {
  const params = useParams();
  const apiCharacterDetail =
    baseUrl + urlCharactersDetail + params?.id + apiKey;
  const [detail, setDetails] = useState();
  const getDetail = async () => {
    const response = await fetch(apiCharacterDetail);
    const data = await response.json();
    setDetails(data.data.results);
  };
  // console.log(detail);
  useEffect(() => {
    getDetail();
  }, []);
  return (
    <>
      <div className="masthead_wrapper_detail">
        <div className="masthead_background_wrapper_detail">
          <img
            className="img_hero"
            src={detail && detail[0]?.thumbnail.path + "/portrait_xlarge.jpg"}
          />
        </div>
        <div className="masthead_hero_detail">
          <div className="masthead_main_detail">
            <div className="masthead_container_detail">
              <h1>
                <span className="headline">{detail && detail[0]?.name}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="detail_content">
        <div className="content">
          <h3 className="title">Biography</h3>
          <div className="text">
            <p>{detail && detail[0]?.description}</p>
          </div>
        </div>
      </div>
      <div className="detail_content">
        <div className="content">
          <h3 className="title">Stories</h3>
          <div className="story">
            {detail &&
              detail[0]?.stories.items.map((detail) => {
                return <p>{detail?.name}</p>;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
