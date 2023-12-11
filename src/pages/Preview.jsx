import PreviewCard from "../components/PreviewCard";
import { useParams } from "react-router-dom";
import { data } from "../assets/data";

const Preview = () => {
  const { id } = useParams();
  const shoeId = Number(id);

  const sneakers = data.sneakers;

  const filteredItems = sneakers.filter(
    (s) => s.retail_price_cents !== null && s.description !== null,
  );

  const qtyUpdate = filteredItems.map((item) => {
    return { ...item, qty: 1 };
  });

  const items = qtyUpdate.filter((item) => item.id === shoeId);
  const shoe = items[0];

  return (
    <div className="">
      <PreviewCard sneakers={shoe} />
    </div>
  );
};

export default Preview;
