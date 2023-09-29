interface inputProps {
  type: string;
  placeholder: string;
  id: string;
  value: string | number;
  onChange?: (value: string) => void;
}

export default function Input(props: inputProps) {
  return (
    <div
      className="flex w-60 m-10 justify-center items-center
     gap-6 mb-6 "
    >
      <input
        type={props.type}
        onChange={(event) => props.onChange?.(event.target.value)}
        value={props.value}
        id={props.id}
        placeholder={props.placeholder}
        className="bg-blackish border border-blackish text-beige text-sm rounded-lg focus:ring-fire focus:border-fire block w-full p-2.5 dark:bg-blackish dark:border-blackish  "
      ></input>
    </div>
  );
}
