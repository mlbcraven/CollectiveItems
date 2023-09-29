interface buttonProps {
  onClick: () => void;
  text: string;
}

export default function Button(props: buttonProps) {
  return (
    <button
      onClick={props.onClick}
      className="bg-blackish text-beige hover:bg-beige hover:text-blackish font-bold py-2 px-4 rounded"
    >
      {props.text}
    </button>
  );
}
