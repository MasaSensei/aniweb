import Elements from "@/components/elements";
import Styles from "./CardsGrid.module.css";

const CardsGrid = () => {
  return (
    <div className={`${Styles.banner} row`}>
      <div className="col-lg-3 col-6 py-3  ">
        <Elements.Card
          image="https://cdn.myanimelist.net/images/anime/4/43643l.webp"
          judul="Sakurasou no Pet na Kanojo"
          link="/anime"
          rating={8.8}
        />
      </div>
      <div className="col-lg-3  col-6 py-3">
        <Elements.Card
          image="https://cdn.myanimelist.net/images/anime/4/43643l.webp"
          judul="Sakurasou no Pet na Kanojo"
          link="/anime"
          rating={8.8}
        />
      </div>
      <div className="col-lg-3  col-6 py-3">
        <Elements.Card
          image="https://cdn.myanimelist.net/images/anime/4/43643l.webp"
          judul="Sakurasou no Pet na Kanojo"
          link="/anime"
          rating={8.8}
        />
      </div>
      <div className="col-lg-3  col-6 py-3">
        <Elements.Card
          image="https://cdn.myanimelist.net/images/anime/4/43643l.webp"
          judul="Sakurasou no Pet na Kanojo"
          link="/anime"
          rating={8.8}
        />
      </div>
    </div>
  );
};

export default CardsGrid;
