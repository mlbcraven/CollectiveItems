import Anchor, { AnchorColors } from "./Anchor";
import "../../public/Logo.png";

export default function Navbar() {
  return (
    <div className="h-20 bg-blackish text-beige  ">
      <div className="flex flex-col text-2xl cursor-pointer left-10  top-1 md:absolute w-14 md:w-14 h-14 items-center gap-2 text-green">
        <img src="../../public/Logo.png" className="" />
      </div>
      <div className="left-40 top-5 absolute flex flex-row space-x-20 items-center justify-center text-xl  ">
        <Anchor href="/app" text="Home" color={AnchorColors.oil} />

        <Anchor href="/app/items" text="Items" color={AnchorColors.oil} />
        <Anchor
          href="/app/contact"
          text="Contact Us"
          color={AnchorColors.oil}
        />
        <Anchor
          href="/app/information"
          text="Information"
          color={AnchorColors.oil}
        />
        <Anchor href="/" text="Welcome Page" color={AnchorColors.oil} />
      </div>
    </div>
  );
}
