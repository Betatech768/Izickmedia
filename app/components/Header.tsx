import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "./ButtonLink";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
export async function Heading() {
  const client = createClient();
  const navigation = await client.getSingle("fallback");
  return (
    <header className="header absolute left-0 right-0 top-0 z-50 ~h-32/48 ~px-4/6 md:h-32">
      <div className="hidden  mx-auto md:grid grid-cols-3 p-6 md:grid-cols-[1fr,auto, 1fr] w-full bg-black opacity-85">
        <Link href={"/"} className="justify-self-start">
          <Image src={"/logo.png"} alt="" height={80} width={80} />
        </Link>
        <nav
          aria-label="Main"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1 flex justify-center"
        >
          <ul className="flex items-center justify-center gap-8 md:gap-4 ">
            {navigation.data.navigation.map((item) => (
              <li className="py-2" key={item.link.text}>
                <PrismicNextLink className="px-1" field={item.link} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex justify-end items-center">
          <a href="mailto:info@izickmedia.com?subject=Inquiry">
            <button className="button">
              Email Us
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
      <div
        aria-label="mobile-navigation"
        className="md:hidden lg:hidden grid grid-cols-3 p-6 bg-black opacity-70 hover:opacity-100 transition duration-300"
      >
        <div></div>
        <Link href={"/"}>
          <img
            src="/logo.png"
            alt="Izickmediia-logo"
            className="justify-self-center pl-3.5 w-25"
          />
        </Link>
      </div>
    </header>
  );
}
