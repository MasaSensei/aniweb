"use client";

import Link from "next/link";
import { Image } from "react-bootstrap";
import Style from "@/components/elements/Card/Card.module.css";
import { AiFillStar } from "react-icons/ai";

interface CardProps {
  judul: string;
  rating: number;
  image: string;
}

const CardElements: React.FC<CardProps> = (props) => {
  const { judul, rating, image } = props;
  return (
    <div className="position-relative grid-img">
      <Link href="/anime">
        <div className={Style.imageContainer}>
          <Image src={image} fluid className={Style.cardImage} />
          <div className={Style.overlay}>
            <div className={Style.rating}>
              <AiFillStar />
              <span className="ms-2">{rating}</span>
            </div>
            <div className={Style.title}>{judul}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardElements;
