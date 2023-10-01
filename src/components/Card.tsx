interface CardProps {
  title: string;
  imgSrc?: string;
  imgAlt?: string;
  desc: string;
  items: number;
  productID: number;
}

export default function Card(props: CardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={props.imgSrc} alt={props.imgAlt} className="w-20 h-20" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl m-2">
          {props.title} ProductID : {props.productID}
        </div>
        <p className="text-oil text-base">{props.desc}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-oil rounded-full px-3 py-1 text-sm font-semibold text-green mr-2">
          Availability of Product : {props.items}
        </span>
      </div>
    </div>
  );
}
