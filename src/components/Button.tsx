import { Option } from "../App";

type Props = {
  handleClick: () => void;
  option: Option;
};

export default function Button({ handleClick, option }: Props) {
  return (
    <button
      onClick={handleClick}
      className="px-4 py-[12px] sm:py-[16px] md:py-[20px] bg-primary text-darker-gray uppercase flex items-center justify-center gap-[24px] disabled:opacity-50 disabled:cursor-not-allowed hover:outline hover:outline-2 hover:outline-primary hover:bg-darker-gray hover:text-primary group transition-colors duration-300"
      disabled={
        !option.uppercase &&
        !option.lowercase &&
        !option.numbers &&
        !option.symbols
      }
    >
      Generate
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#24232C"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
          className="group-hover:fill-primary"
        />
      </svg>
    </button>
  );
}
