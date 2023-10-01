import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";
import { itemObject } from "./AddItem";

export default function Items() {
  const navigate = useNavigate();

  function getItemInfo(): itemObject[] {
    const getItemFromStorage = localStorage.getItem("item");
    const itemObject = getItemFromStorage
      ? JSON.parse(getItemFromStorage)
      : null;

    return itemObject;
  }
  function cardRender() {
    return getItemInfo().map((item, index) => (
      <Card
        key={index}
        productID={item.id}
        items={item.itemAvailable}
        desc={item.itemDesc}
        title={item.itemTitle}
      />
    ));
  }

  return (
    <div>
      <div className="m-2 p-2 flex flex-row border-double border-blackish border-2 rounded-md">
        {cardRender()}
      </div>
      <Button text="Add Item" onClick={() => navigate("/app/addItem")} />
    </div>
  );
}
