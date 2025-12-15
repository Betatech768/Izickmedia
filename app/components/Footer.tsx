import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="flex flex-col relative py-20 px-12">
      <div className="md:grid grid-cols-2 py-8 ">
        <div className="flex flex-col items-center md:grid grid-cols-2 ">
          <div className="py-4 text-center">
            {/* <img src="" alt="" /> */}
            <span className="flex justify-center">
              <Image width={80} height={80} src={"/logo.png"} alt="" />
            </span>
            <p className="font-mono italic text-xs text-red-500">
              touching the souls of men through heavenly sounds
            </p>
          </div>
          <div>
            <div className="py-4 text-center">
              <p className="text-gray-500">Email</p>
              <p className="hover:text-red-500">
                <a href="mailto:info@izickmedia.com">info@izickmedia.com</a>
              </p>
            </div>
            <div className="py-4 text-center">
              <p className="text-gray-500">Phone</p>
              <p>+234 813 893 2032</p>
            </div>
          </div>
        </div>
        <div className="md:grid grid-cols-3">
          <div className="py-4 text-center">
            <p className="text-gray-500">Address</p>
            <p>Adjacent Redeem Church Lugbe</p>
            <p>Abuja</p>
            <p>F.C.T Nigeria</p>
          </div>
        </div>
      </div>
      <div className="borders py-4"></div>
      <div className="flex justify-between">
        <p className="text-gray-500">
          ©{new Date().getFullYear()} copyright of Izickmedia
        </p>
        <div>
          <Link href="/">
            <span className="px-2">Home</span>
          </Link>
          <Link href={"/about"}>
            <span className="px-2">About</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
