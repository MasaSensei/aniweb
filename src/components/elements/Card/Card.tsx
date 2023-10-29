"use client";

import Link from "next/link";
import { Image } from "react-bootstrap";
import Style from "@/components/elements/Card/Card.module.css";
import { AiFillStar } from "react-icons/ai";

const CardElements = () => {
  return (
    <div className="position-relative grid-img">
      <Link href="/anime">
        <div className={Style.imageContainer}>
          <Image
            src="https://cdn.myanimelist.net/images/anime/4/43643l.webp"
            fluid
            className={Style.cardImage}
          />
          <div className={Style.overlay}>
            <div className={Style.rating}>
              <AiFillStar />
              <span className="ms-2">8.08</span>
            </div>
            <div className={Style.title}>Sakura-sou no Pet na Kanojo</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardElements;
