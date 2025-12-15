import {
  ElementType,
  CSSProperties,
  ReactNode,
  ComponentPropsWithoutRef,
} from "react";
import clsx from "clsx";

type BrandedProps<T extends ElementType = "section"> = {
  as?: T;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export function Bounded<T extends ElementType = "section">({
  as,
  className,
  children,
  ...restProps
}: BrandedProps<T>) {
  const Comp = as || "section";
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
