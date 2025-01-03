import CopyTextBtn from "./CopyTextBtn";

type Props = {
  password: string;
};

export default function ShowPassword({ password }: Props) {
  return (
    <div className="flex flex-col gap-[18px] md:gap-[24px] 2xl:gap-[32px]">
      <p className="body sm:heading-medium text-dark-gray self-center">
        Password Generator
      </p>
      <div className="flex items-center justify-between bg-darker-gray px-[24px] md:px-[32px] py-[19px]">
        <p className="text-body sm:heading-medium md:heading-large bg-darker-gray p-0 text-white-custom outline-none h-[43px] flex items-center">
          {password}
        </p>
        <CopyTextBtn password={password} />
      </div>
    </div>
  );
}
