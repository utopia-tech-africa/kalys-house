import Image from "next/image";
import { RegistrationForm } from "./registration-form";
import { BackDropImg } from "@/app/assets/img";

const Registration = () => {
  return (
    <div className="relative w-full overflow-hidden mb-5">
      <Image
        src={BackDropImg}
        alt="footer image"
        fill
        className="absolute inset-0 object-cover -z-20"
      />

      <div className="absolute inset-0 bg-black/90 -z-10"></div>
      <div className="relative z-10">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
