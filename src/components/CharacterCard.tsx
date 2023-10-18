interface CharacterCardProps {
  id: number;
  name: string;
  firstAppearance: string;
  publisher: string;
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
  imageSrc: string;
  slug: string;
  gender: string;
  occupation: string;
  groupAffiliation: string;
}

export default function CharacterCard(props: CharacterCardProps) {
  return (
    <div className="rounded-lg shadow-md p-4 m-2 h-[700px]">
      <div className="bg-blackish text-beige rounded-lg shadow-md p-4 m-1 w-50% ">
        <img
          alt={props.name}
          src={props.imageSrc}
          className="w-50% h-48 object-cover mb-2"
        />
        <h2 className="text-2xl font-semibold mb-2">{props.name}</h2>
        <p className=" text-sm mb-2">
          First Appearance: {props.firstAppearance}
        </p>
        <p className="text-oil text-sm mb-2">Publisher: {props.publisher}</p>
        <ul>
          <li className="text-fire">Intelligence: {props.intelligence}</li>
          <li className="text-fire">Strength: {props.strength}</li>
          <li className="text-fire">Speed: {props.speed}</li>
          <li className="text-fire">Durability: {props.durability}</li>
          <li className="text-fire">Power: {props.power}</li>
          <li className="text-fire">Combat: {props.combat}</li>
        </ul>
        <div className="bg-blackish text-beige right-1">
          <ul>
            <li>Slug: {props.slug}</li>
            <li>Gender: {props.gender}</li>
            <li>Occupation: {props.occupation}</li>
            <li>Group Affiliation: {props.groupAffiliation}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
