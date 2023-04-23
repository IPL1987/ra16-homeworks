import { useSelector } from "react-redux";
import MarketProduct from "./MarketProducts";

export default function MarketList() {
  const goods = useSelector((state) => state.marketList);

  return (
    <div className="MarketList">
      <h2>Приглядитесь к этим предложениям</h2>
      <ul className="MarketList__list">
        {goods.map((product) =>
          <MarketProduct key={product.id} product={product} />
        )
        }
      </ul >
    </div>
  );
}