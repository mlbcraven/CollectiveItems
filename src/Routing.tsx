import App from "./App.tsx";
import ContactUs from "./screens/Contact.tsx";
import AppsRoutes from "./screens/AppsRoutes.tsx";
import Information from "./screens/Information.tsx";
import Items from "./screens/Items.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddItem from "./screens/AddItem.tsx";
import Characters from "./screens/Characters.tsx";

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppsRoutes />} />
        <Route path="/app" element={<App />}>
          <Route path="/app/items" element={<Items />} />
          <Route path="/app/contact" element={<ContactUs />} />
          <Route path="/app/information" element={<Information />} />
          <Route path="/app/addItem" element={<AddItem />} />
          <Route path="/app/characters" element={<Characters />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
