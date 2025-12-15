import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

type Props = {
  service: Content.ServicesDocument;
  index: number;
};

function ServiceProvided({ service, index }: Props) {
  return (
    <div className="group relative overflow-hidden h-72 flex flex-col items-center gap-4 m-4 rounded-2xl">
      <div className="stack-layout ">
        <PrismicNextImage
          field={service.data.background}
          width={500}
          alt=""
          className="scale-125 transform transition-all duration-1000 ease-in-out
           group-hover:scale-115 group-hover:brightness-75 group-hover:saturate-[.8]"
        />
        <PrismicNextImage
          field={service.data.foreground}
          width={500}
          alt=""
          className="transform transition-transform duration-1000 ease-in-out 
          group-hover:scale-110 z-10 brightness-95 md:group-hover:brightness-100"
        />
        <h3
          className="servicelabel group-hover:translate-y-3.5 group-hover:text-white md:brightness-75 transition-all duration-1000 absolute grid place-self-end justify-self-center p-2 font-cinzel text-3xl
         md:text-4xl lg:text-5xl z-30 top-1/2 mx-auto group-hover:brightness-110 "
        >
          <span className="mb-[-.3em] block">{service.data.servicename}</span>
        </h3>
      </div>
    </div>
  );
}

export default ServiceProvided;
