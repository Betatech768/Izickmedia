import React from "react";
import { FC, JSX } from "react";
import { Content } from "@prismicio/client";
import { createClient } from "@/prismicio";
import { SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/Bounded";
import ServiceProvided from "@/app/components/Service";

/**
 * Props for `Service`.
 */
export type ServiceProps = SliceComponentProps<Content.ServiceSlice>;

/**
 * Component for "Service" Slices.
 */
const Service: FC<ServiceProps> = async ({ slice }): Promise<JSX.Element> => {
  const client = createClient();
  const serviceItem = await client.getAllByType("services");
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="service flex justify-center py-12 text-4xl md:text-6xl">
        {slice.primary.heading}
      </div>
      <div className="md:grid grid-cols-2">
        {serviceItem.map((service, index) => {
          return (
            <React.Fragment key={index}>
              {service.data.servicename && (
                <ServiceProvided service={service} index={index} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </Bounded>
  );
};

export default Service;
