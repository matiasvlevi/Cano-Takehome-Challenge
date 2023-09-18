import { ChangeEventHandler } from "react";

interface SearchBarProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div>
      <span>Search: </span>
      <input
        type="text"
        placeholder="product..."
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
