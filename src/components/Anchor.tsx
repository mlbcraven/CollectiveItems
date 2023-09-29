interface AnchorProps {
  href: string;
  text: string;
  color?: AnchorColors;
}

export enum AnchorColors {
  fire = "text-fire",
  black = "text-blackish",
  beige = "text-beige",
  oil = "text-oil",
}

export default function Anchor(props: AnchorProps) {
  return (
    <a href={props.href} className={`text-beige hover:${props.color}  `}>
      {props.text}
    </a>
  );
}
