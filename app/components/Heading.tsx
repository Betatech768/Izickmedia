import clsx from "clsx";
import { ReactNode } from "react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  className?: string;
  children: ReactNode;
};

export function Header({
  as: Comp = "h1",
  size = "lg",
  className,
  children,
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-poppins-800",
        size === "xl" && "md:text-4xl lg:text-8xl",
        size === "lg" && "md:text-4xl lg:text-7xl",
        size === "md" && "md:text-3xl lg:text-5xl",
        size === "sm" && "md:text-2xl lg:text-4xl",
        size === "xs" && "md:text-lg lg:text-xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
