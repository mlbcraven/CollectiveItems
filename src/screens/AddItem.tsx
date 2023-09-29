import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function AddItem() {
  const [itemID, setItemId] = useState(0);
  const [itemTitle, setItemTitle] = useState("");
  const [itemDesc, setItemDesc] = useState("");
  const [itemAvailable, setItemAvailable] = useState(0);
  return (
    <div>
      <Input
        type={"number"}
        placeholder={"ID of product"}
        id={"idID"}
        value={"id"}
        onChange={(value) => {
          setItemId(value);
        }}
      />
      <Input
        id="title"
        placeholder="Product Title"
        type="text"
        value={"title"}
      />

      <Input
        type={"text"}
        placeholder={"Product Description"}
        id={"desc"}
        value={"description"}
      />
      <Input
        id="Item"
        placeholder="Available Items"
        type="number"
        value={"itemNumber"}
      />
      <div>
        <Button
          text="Add Item"
          onClick={() => localStorage.setItem("item", {})}
        />
      </div>
    </div>
  );
}
