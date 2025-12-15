import { FaPhone, FaPlus } from "react-icons/fa6";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
import clsx from "clsx";

export type ButtonProps = PrismicNextLinkProps & {
  color?: "orange" | "purple" | "lime";
  size?: "sm" | "md" | "lg";
  icon?: "phone" | "headphone" | "plus";
};

export function ButtonLink({
  color = "orange",
  size = "md",
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "button-cutout group mx-4 inline-flex items-center bg-linear-to-b from-gray-300 from-25% to-white to-75% bg-size-[100%_400%] font-bold transition-[filter,background-position] duration-300 hover:bg-bottom",
        size === "sm" && "gap-2.5 py-2 text-base",
        size === "md" && "gap-3 px-1 text-lg ~py-2.5/3",
        size === "lg" && "~text-lg/2xl ~gap-3/4 ~px-1/2 ~py-3/4",
        color === "orange" &&
          "from-brand-orange to-brand-lime text-black hover:text-black",
        color === "purple" &&
          "from-brand-purple to-brand-lime text-white hover:text-black",
        color === "lime" && "from-brand-lime to-brand-orange text-black",
        className
      )}
      {...props}
    >
      {icon ? (
        <>
          <div
            className={clsx(
              "flex size-6 items-center justify-center transition-transform group-hover:-rotate-25 [&>svg]:h-full [&>svg]:w-full",
              size === "sm" && "size-5",
              size === "md" && "size-6",
              size === "lg" && "~size-6/8"
            )}
          >
            {icon === "phone" && <FaPhone />}
            {icon === "headphone" && <SkateboardIcon />}
            {icon === "plus" && <FaPlus />}
          </div>
          <div className="w-px self-stretch bg-black/25" />
        </>
      ) : null}
      {children}
    </PrismicNextLink>
  );
}

function SkateboardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      fill="#000"
    >
      <path
        d="M95,50C95,25.187,74.813,5,50,5S5,25.187,5,50C5,57.516,6.83,64.751,10.28,71.195C10.101,72.428,10,73.698,10,75C10,86.028,16.729,95,25,95C30.514,95,35,90.514,35,85L35,65C35,59.486,30.514,55,25,55C24.318,55,23.651,55.082,22.992,55.201C22.669,53.504,22.5,51.765,22.5,50C22.5,34.836,34.836,22.5,50,22.5S77.5,34.836,77.5,50C77.5,51.765,77.331,53.504,77.008,55.201C76.349,55.082,75.682,55,75,55C69.486,55,65,59.486,65,65L65,85C65,90.514,69.486,95,75,95C83.271,95,90,86.028,90,75C90,73.698,89.899,72.428,89.72,71.195C93.17,64.751,95,57.516,95,50ZM30,65L30,85C30,87.757,27.757,90,25,90C23.192,90,21.482,89.222,20,87.901L20,62.099C21.482,60.778,23.192,60,25,60C27.757,60,30,62.243,30,65ZM50,17.5C32.08,17.5,17.5,32.08,17.5,50C17.5,52.432,17.775,54.82,18.292,57.137C16.755,58.167,15.369,59.532,14.19,61.171C13.08,57.601,12.5,53.845,12.5,50C12.5,29.322,29.322,12.5,50,12.5S87.5,29.322,87.5,50C87.5,53.845,86.92,57.601,85.811,61.171C84.631,59.532,83.245,58.167,81.709,57.137C82.225,54.82,82.5,52.432,82.5,50C82.5,32.08,67.92,17.5,50,17.5ZM70,85L70,65C70,62.243,72.243,60,75,60C76.808,60,78.518,60.778,80,62.099L80,87.902C78.518,89.222,76.808,90,75,90C72.243,90,70,87.757,70,85Z"
        stroke="none"
      ></path>
    </svg>
  );
}
