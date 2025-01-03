import { ChangeEvent, useState } from "react";
import RangeSlider from "./components/RangeSlider";
import PasswordStrength from "./components/PasswordStrength";
import ShowPassword from "./components/ShowPassword";
import Button from "./components/Button";
import OptionsInput from "./components/OptionsInput";

export type Option = {
  lowercase: boolean;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
};

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [option, setOption] = useState<Option>({
    lowercase: true,
    uppercase: true,
    numbers: false,
    symbols: false,
  });

  function handlePasswordLengthChange(length: number) {
    setPasswordLength(length);
  }

  function generatePassword(length: number) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = `~!@#$%^&*()_+=?/{}[]:;,.|\\`;

    let charset = "";
    if (option.numbers) charset += numbers;
    if (option.lowercase) charset += lowercase;
    if (option.uppercase) charset += uppercase;
    if (option.symbols) charset += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }

  function generatePasswordStrength(password: string, option: Option) {
    if (!password) return "";

    const length = password.length;
    let optionStrength = 0;

    if (option.uppercase) optionStrength++;
    if (option.lowercase) optionStrength++;
    if (option.numbers) optionStrength++;
    if (option.symbols) optionStrength++;

    if (length < 6) {
      return "too weak!"; // Length too short
    } else if (length >= 6 && length < 8) {
      return optionStrength >= 2 ? "weak" : "too weak!";
    } else if (length >= 8 && length < 12) {
      return optionStrength >= 3 ? "medium" : "weak";
    } else {
      return optionStrength === 4 ? "strong" : "medium";
    }
  }

  function handleGeneratePassword() {
    const pwd = generatePassword(passwordLength);
    setPassword(pwd);
    const strength = generatePasswordStrength(pwd, option);
    setPasswordStrength(strength);
  }

  function handleOptionChange(e: ChangeEvent<HTMLInputElement>) {
    setOption(option => {
      return {
        ...option,
        [e.target.name]: e.target.checked,
      };
    });
  }

  // console.log(password, passwordLength, passwordStrength, option);

  return (
    <section className="w-screen h-screen p-0 flex items-center justify-center">
      <div className="w-full sm:max-w-[480px] md:max-w-[540px] flex flex-col gap-[12px] md:gap-[12px] 2xl:gap-[24px] mx-4 md:mx-0">
        <ShowPassword password={password} />
        <div className="w-full bg-darker-gray flex flex-col gap-[24px] 2xl:gap-[32px] pt-[12px] md:pt-[24px] px-[24px] md:px-[32px] pb-[24px] 2xl:pb-[32px]">
          <RangeSlider
            onChange={handlePasswordLengthChange}
            minValue={6}
            maxValue={16}
          />
          <OptionsInput handleChange={handleOptionChange} option={option} />
          <PasswordStrength strength={passwordStrength} />
          <Button handleClick={handleGeneratePassword} option={option} />
        </div>
      </div>
    </section>
  );
}

export default App;
