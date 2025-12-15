import { ElementType, CSSProperties, ReactNode } from "react";
import clsx from "clsx";

type BrandedProps = {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BrandedProps) {
  return (
    <Comp
      className={clsx(
        `px-6 md:py-10 lg:py-16 [.header+&]:pt-44 [.header+&]:md:pt-32 ${className}`
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
