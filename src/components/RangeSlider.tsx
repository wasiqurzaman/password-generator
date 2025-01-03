import { ChangeEvent, useState } from "react";

type RangeSliderProps = {
  onChange: (length: number) => void;
  minValue: number;
  maxValue: number;
};

function RangeSlider({ minValue, maxValue, onChange }: RangeSliderProps) {
  const [sliderValue, setSliderValue] = useState(8);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSliderValue(Number(e.target.value));
    onChange(Number(e.target.value));
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-white-custom text-base sm:text-[18px]">
          Character Length
        </p>
        <p className="heading-medium sm:heading-large text-primary ">
          {sliderValue}
        </p>
      </div>
      <div>
        <input
          type="range"
          name="range"
          id="myInput"
          value={sliderValue}
          onChange={handleChange}
          min={minValue}
          max={maxValue}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default RangeSlider;
