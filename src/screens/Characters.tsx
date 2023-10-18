import { useEffect, useState } from "react";
import { Heroes, Villains } from "../Api";
import CharacterCard from "../components/CharacterCard";

interface SuperCharacter {
  id: number;
  name: string;
  slug: string;
  powerstats: {
    intelligence: number;
    strength: number;
    speed: number;
    durability: number;
    power: number;
    combat: number;
  };
  appearance: {
    gender: string;
    race: string;
    height: string[];
    weight: string[];
    eyeColor: string;
    hairColor: string;
  };
  biography: {
    fullName: string;
    alterEgos: string;
    aliases: string[];
    placeOfBirth: string;
    firstAppearance: string;
    publisher: string;
    alignment: string;
  };
  work: {
    occupation: string;
    base: string;
  };
  connections: {
    groupAffiliation: string;
    relatives: string;
  };
  images: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

export default function Characters() {
  const [heroes, setHeroes] = useState<SuperCharacter[]>([]);
  const [villains, setVillains] = useState<SuperCharacter[]>([]);
  useEffect(() => {
    async function getH() {
      const getHeroes = await Heroes();
      setHeroes(getHeroes);
    }
    async function getV() {
      const getVillains = await Villains();

      setVillains(getVillains);
    }
    getV();
    getH();
  }, []);
  const arrayOfHeroe: SuperCharacter[] = heroes;
  const arrayOfVillains: SuperCharacter[] = villains;

  function hereosData(superCharacter: SuperCharacter[]) {
    return superCharacter.map(
      ({
        id,
        name,
        slug,
        powerstats,
        appearance,
        biography,
        work,
        connections,
        images,
      }) => {
        return (
          <div className="w-50%">
            <CharacterCard
              combat={powerstats.combat}
              durability={powerstats.durability}
              id={id}
              imageSrc={images.lg}
              name={name}
              intelligence={powerstats.intelligence}
              power={powerstats.power}
              publisher={biography.publisher}
              speed={powerstats.speed}
              strength={powerstats.strength}
              firstAppearance={biography.firstAppearance}
              slug={slug}
              gender={appearance.gender}
              occupation={work.occupation}
              groupAffiliation={connections.groupAffiliation}
            />
          </div>
        );
      }
    );
  }

  const renderHeroe = hereosData(arrayOfHeroe);
  const renderVillains = hereosData(arrayOfVillains);

  function sumOfAttributes(characterAttributes: SuperCharacter[]): number[] {
    const renderHeroeAttributes = characterAttributes.map(
      (e) =>
        e.powerstats.combat +
        e.powerstats.durability +
        e.powerstats.intelligence +
        e.powerstats.power +
        e.powerstats.speed +
        e.powerstats.strength
    );
    return renderHeroeAttributes;
  }

  return (
    <div className="m-2 flex flex-row">
      <div
        className={`${
          sumOfAttributes(heroes) > sumOfAttributes(villains)
            ? `bg-green`
            : `bg-fire`
        }`}
      >
        {renderHeroe}
      </div>
      <div
        className={`${
          sumOfAttributes(heroes) > sumOfAttributes(villains)
            ? `bg-fire`
            : `bg-green`
        }`}
      >
        {renderVillains}
      </div>
    </div>
  );
}
