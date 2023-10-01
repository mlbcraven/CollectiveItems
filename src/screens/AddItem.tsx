import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";

export interface itemObject {
  id: number;
  itemTitle: string;
  itemDesc: string;
  itemAvailable: number;
}

export default function AddItem() {
  const [itemArray] = useState<Array<itemObject>>([]);
  const [newItem, setNewItem] = useState<itemObject>({
    id: 0,
    itemAvailable: 0,
    itemDesc: "",
    itemTitle: "",
  });

  return (
    <div>
      <Input
        type={"number"}
        placeholder={"ID of product"}
        id={"itemID"}
        value={newItem.id || 0}
        onChange={(e) =>
          setNewItem({
            ...newItem,
            id: parseInt(e),
          })
        }
      />
      <Input
        id="title"
        placeholder="Product Title"
        type="text"
        value={newItem.itemTitle || ""}
        onChange={(e) => setNewItem({ ...newItem, itemTitle: e })}
      />

      <Input
        type={"text"}
        placeholder={"Product Description"}
        id={"desc"}
        value={newItem.itemDesc || ""}
        onChange={(e) => setNewItem({ ...newItem, itemDesc: e })}
      />
      <Input
        id="Item"
        placeholder="Available Items"
        type="number"
        value={newItem.itemAvailable || 0}
        onChange={(e) => setNewItem({ ...newItem, itemAvailable: parseInt(e) })}
      />
      <div>
        <Button
          text="Add Item"
          onClick={() => {
            itemArray.push(newItem);
            localStorage.setItem("item", JSON.stringify(itemArray));
            console.log(localStorage.getItem("item"));
            console.log(itemArray);
          }}
        />
      </div>
    </div>
  );
}
