import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col justify-center items-center">
      <Input
        placeholder="Name"
        type="text"
        id="nameIn"
        value={name}
        onChange={(value) => {
          setName(value);
        }}
      />
      <Input
        placeholder="Email"
        type="email"
        id="emailIn"
        value={email}
        onChange={(value) => {
          setEmail(value);
        }}
      />
      <Button
        text="Submit"
        onClick={() => {
          localStorage.setItem("name", JSON.stringify({ name, email }));

          console.log(localStorage.getItem("name"));
        }}
      />
    </div>
  );
}
