import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Items() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="m-2 p-2 flex flex-row border-double border-blackish border-2 rounded-md">
        <Card
          desc="Best Product"
          imgAlt="BuildAByte"
          imgSrc="../../public/Logo.png"
          items={15}
          productID={1234}
          title="Collective Item"
        />
      </div>
      <Button text="Add Item" onClick={() => navigate("/app/addItem")} />
    </div>
  );
}
