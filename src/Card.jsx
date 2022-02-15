import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className="mvl-card">
      <Link to={`/character/${props.id}`} className="explore_link">
        <div className="card-thumb">
          <div className="img__wrapper">
            <img className="card-thumb-frame" src={props.img} />
          </div>
        </div>
        <div className="card-body">
          <p className="card-body_headline">{props.cname}</p>
          <div className="card-footer">
            <p className="card-footer_secondery_text">{props.rname}</p>
            <p className="card-footer_micro-description"></p>
          </div>
        </div>
      </Link>
    </div>
  );
}
