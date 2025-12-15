import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicImage,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection: FC<AboutSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex justify-center items-center py-8 text-4xl md:text-6xl font-extrabold">
        <PrismicRichText field={slice.primary.our_mission} />
      </div>
      <div className="px-10 flex justify-center flex-col text-justify font-mono gap-10 lg:grid grid-cols-2">
        <div className="text-red-500 my-auto">
          <PrismicRichText field={slice.primary.body} />
        </div>
        <PrismicImage
          className="rounded-4xl"
          field={slice.primary.missionimage}
        />
      </div>
    </section>
  );
};

export default AboutSection;
