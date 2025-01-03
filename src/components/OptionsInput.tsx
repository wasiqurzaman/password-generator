import { ChangeEvent } from "react";
import { Option } from "../App";

type Props = {
  option: Option;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function OptionsInput({ option, handleChange }: Props) {
  return (
    <div className="text-white-custom flex flex-col gap-[12px] md:gap-[20px]">
      <div className="flex gap-[12px] sm:gap-[24px] items-center">
        <input
          type="checkbox"
          name="uppercase"
          id="uppercase"
          checked={option.uppercase}
          onChange={e => handleChange(e)}
        />
        <label
          htmlFor="uppercase"
          className="cursor-pointer text-sm sm:text-[18px]"
        >
          Include Uppercase Letters
        </label>
      </div>
      <div className="flex gap-[12px] sm:gap-[24px] items-center">
        <input
          type="checkbox"
          name="lowercase"
          id="lowercase"
          checked={option.lowercase}
          onChange={e => handleChange(e)}
        />
        <label
          htmlFor="lowercase"
          className="cursor-pointer text-sm sm:text-[18px]"
        >
          Include Lowercase Letters
        </label>
      </div>
      <div className="flex gap-[12px] sm:gap-[24px] items-center">
        <input
          type="checkbox"
          name="numbers"
          id="numbers"
          checked={option.numbers}
          onChange={e => handleChange(e)}
        />
        <label
          htmlFor="numbers"
          className="cursor-pointer text-sm sm:text-[18px]"
        >
          Include Numbers
        </label>
      </div>
      <div className="flex gap-[12px] sm:gap-[24px] items-center">
        <input
          type="checkbox"
          name="symbols"
          id="symbols"
          checked={option.symbols}
          onChange={e => handleChange(e)}
        />
        <label
          htmlFor="symbols"
          className="cursor-pointer text-sm sm:text-[18px]"
        >
          Include Symbols
        </label>
      </div>
    </div>
  );
}

export default OptionsInput;
