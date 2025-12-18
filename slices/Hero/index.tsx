import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

// components imports
import { Bounded } from "@/app/components/Bounded";
import { Header } from "@/app/components/Heading";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => (
  <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="h-[50dvh] about-bg relative"
  >
    <div className="absolute inset-0 mx-auto mt12 md:grid flex flex-col justify-center max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 md:py-10 lg:py-16">
      <Header className="text-red-500 relative place-self-center max-w-2xl font-extrabold md:top-32 text-3xl md:text-5xl">
        <div>
          <PrismicRichText field={slice.primary.heading} />
        </div>
      </Header>
    </div>
  </Bounded>
);

export default Hero;
