type Props = {
  strength: string;
};

function PasswordStrength({ strength }: Props) {
  if (!strength) return null;

  return (
    <div className="text-white-custom bg-black-custom py-[12px] sm:py-[16px] md:py-[20px] px-[10px] sm:px-[24px] md:px-[32px] flex justify-between items-center">
      <p className="text-dark-gray uppercase font-bold text-sm sm:text-base md:text-[18px]">
        Strength
      </p>
      <div className="flex items-center gap-2 sm:gap-4">
        <p className="uppercase font-bold text-sm sm:text-base md:text-[18px]">
          {strength}
        </p>
        {/* Too Weak! */}
        {strength === "too weak!" && (
          <div className="flex items-center gap-[5px] sm:gap-[7.5px]">
            <div className="w-[10px] h-[28px] bg-red-custom"></div>
            <div className="w-[10px] h-[28px] bg-transprent border-2 border-white-custom"></div>
            <div className="w-[10px] h-[28px] bg-transprent border-2 border-white-custom"></div>
            <div className="w-[10px] h-[28px] bg-transprent border-2 border-white-custom"></div>
          </div>
        )}
        {/* Weak */}
        {strength === "weak" && (
          <div className="flex items-center gap-[5px] sm:gap-[7.5px]">
            <div className="w-[10px] h-[28px] bg-orange-custom"></div>
            <div className="w-[10px] h-[28px] bg-orange-custom"></div>
            <div className="w-[10px] h-[28px] bg-transprent border-2 border-white-custom"></div>
            <div className="w-[10px] h-[28px] bg-transprent border-2 border-white-custom"></div>
          </div>
        )}
        {/* Medium */}
        {strength === "medium" && (
          <div className="flex items-center gap-[5px] sm:gap-[7.5px]">
            <div className="w-[10px] h-[28px] bg-yellow-custom"></div>
            <div className="w-[10px] h-[28px] bg-yellow-custom"></div>
            <div className="w-[10px] h-[28px] bg-yellow-custom"></div>
            <div className="w-[10px] h-[28px] bg-transprent border-2 border-white-custom"></div>
          </div>
        )}
        {/* Strong */}
        {strength === "strong" && (
          <div className="flex items-center gap-[5px] sm:gap-[7.5px]">
            <div className="w-[10px] h-[28px] bg-primary"></div>
            <div className="w-[10px] h-[28px] bg-primary"></div>
            <div className="w-[10px] h-[28px] bg-primary"></div>
            <div className="w-[10px] h-[28px] bg-primary"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PasswordStrength;
