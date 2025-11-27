import Image from "next/image";
import { RegistrationForm } from "./registration-form";
import { backdropImage2 } from "@/assets/img";

const Registration = () => {
  return (
    <div className="p-1 md:p-3 mb-4 relative w-full overflow-hidden">
      <Image
        src={backdropImage2}
        alt="kalys house backdrop"
        fill
        className="absolute inset-0 object-cover  -z-20"
      />

      <div className="absolute md:inset-0 md:bg-black/10 -z-10" />

      <div className="relative z-10 inset-0 flex items-center justify-center lg:justify-end px-6 md:px-16">
        <div className="w-full h-full max-w-[522px]">
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default Registration;
