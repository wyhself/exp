import { Link } from "react-router-dom";
import * as React from "react";

interface CardImageProps {
  imgPath: string;
  imgAlt: string;
}

interface CardProps {
  title: string;
  description: string;
  linkPath: string;
  linkText: string;
  img: CardImageProps | null;
}

export const CardImage = (props: CardImageProps) => (
  <img className="card-img-top" src={props.imgPath} alt={props.imgAlt} />
);

export const Card = (props: CardProps) => (
  <div className="card">
    {props.img ? <CardImage {...props.img} /> : null}
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.description}</p>
      <Link className="btn btn-primary" to={props.linkPath}>
        {props.linkText}
      </Link>
    </div>
  </div>
);
